import time
from flask_ngrok import run_with_ngrok
from flask import Flask, request
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi
import requests
import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest
from gensim.summarization import keywords
import googletrans
from googletrans import Translator

# app = Flask(__name__)
app = Flask(__name__)
CORS(app)
run_with_ngrok(app)


def get_summary(id):
    srt = YouTubeTranscriptApi.get_transcript("nlLxrMBzsMM")
    para = ""

    for i in srt:
      para += i['text'].replace('\n',"") + " "

    url = 'http://bark.phon.ioc.ee/punctuator'

    unpunctuated_text = {
      'text': para
    }

    response = requests.post(url, data = unpunctuated_text)

    text = (response.text).replace('[, Music, ]',' ')
    text = (response.text).replace('[ Applause, ]',' ')
    stopwords=list(STOP_WORDS)

    nlp=spacy.load('en_core_web_sm')
    doc=nlp(text)
    tokens=[token.text for token in doc]

    word_frequencies={}
    for word in doc:
      if word.text.lower() not in stopwords:
          if word.text.lower() not in punctuation:
              if word.text not in word_frequencies.keys():
                  word_frequencies[word.text]= 1
              else:
                  word_frequencies[word.text]+=1

    max_frequency= max(word_frequencies.values())
    for word in word_frequencies.keys():
      word_frequencies[word]=word_frequencies[word]/max_frequency
    
    sentence_tokens=[sent for sent in doc.sents]

    sentence_scores={}
    for sent in sentence_tokens:
      for word in sent:
        if word.text.lower() in word_frequencies.keys():
          if sent not in sentence_scores.keys():
            sentence_scores[sent]=word_frequencies[word.text.lower()]
          else:
            sentence_scores[sent]+=word_frequencies[word.text.lower()]
    
    select_length =int(len(sentence_tokens)*0.10)
    summary=nlargest(select_length,sentence_scores,key=sentence_scores.get)
    final_summary=[word.text for word in summary]
    summary=' '.join(final_summary)
    summary=summary.replace('\n','')

    return summary, keywords(text, words=6, lemmatize=True)

def tranlate_text(text, lang):
    translator = Translator()
    # lang_det = translator.detect(text).lang
    return translator.translate(text, src="en", dest = lang).text

@app.route("/summary", methods=["POST"], strict_slashes=False)
def summarize():
    title = request.json['title']
    body = request.json['body']
    summary, keywords = get_summary(body)
    keywords = keywords.split('\n')
    return {"summary" : summary, "keywords" : keywords }

@app.route("/translate", methods=["POST"], strict_slashes=False)
def trans():
    title = request.json['title']
    body = request.json['summary']
    lang = request.json['lang']
    translated_text = tranlate_text(body, lang)
    return {"translate" : translated_text }

@app.route('/time')
def get_current_time():
    return {'time': time.time()} 

if __name__ == "__main__":
  app.run()