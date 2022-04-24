import time
from flask_ngrok import run_with_ngrok
from flask import Flask

app = Flask(__name__)
run_with_ngrok(app)

@app.route('/time')
def get_current_time():
    return {'time': time.time()} 

if __name__ == "__main__":
  app.run()