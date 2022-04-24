import React,{useState, useEffect} from 'react'
import './home.css'
import './yt.jpg'
import APIService from '../APIService/APIService';
import {InputGroup , Text, FormControl, Button, Container, Row, Col, ListGroup, Form} from "react-bootstrap";


const Home=()=>{
    const [title, setTitle] = useState('')
    const [body, setBody] = useState("")
    const [link, setLink] = useState('')
    const  [summary, setSummary] = useState('')
    const [keywords, setKeywords] = useState([])
    const [lang, setLang] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const callAPI = () =>{
      APIService.getSummary({title,body})
      .then((response) => {console.log(response) 
        setSummary(response.summary)
        setKeywords(response.keywords)
    })
      .catch(error => console.log('error',error))
    }

    const callTranslateAPI = () =>{
        APIService.getTranslation({title,summary,lang})
        .then((response) => {console.log(response) 
          setTranslatedText(response.translate)
      })
        .catch(error => console.log('error',error))
      }
    
    useEffect(() => {
        console.log(`count changed to ${body}`);
        if(body !== '')
            callAPI();
            
    }, [body]);
    const handleSubmit=(event)=>{ 
      console.log("qwerty " + link)
      setBody(link)
    }
    const handleChange = (event)=>{
        setLink(event.target.value)
    }
    const handleTranslate = (event)=>{
        setLang(lang)
        console.log(lang + "kfasdljfal")
        console.log(summary)
        callTranslateAPI();
    }
    return (
        <div className='container home'>
           
            <InputGroup className="mb-3">
                <InputGroup.Text  id="inputGroup-sizing-link" >Paste Youtube Link</InputGroup.Text>
                <FormControl
                aria-label="Link"
                aria-describedby="inputGroup-sizing-link"
                value = {link}
                onChange = {handleChange}
                />
            </InputGroup>

            <Button variant="outline-primary" onClick={handleSubmit}>Get Summary</Button>{' '}

        {/* <div className='sum' id='summary'>
            <p className='sum'>Summary</p>
        </div> */}
        
        <Container className="sum">
        <Row>
            <Col sm={8} className='sec'>
            <h4>Summary</h4>
            <p>{summary}</p>
            </Col>

            <Col sm={4} className='sec'>
               <h4>Genre and Keywords</h4>
               <ListGroup>
                {keywords.map((word) => <ListGroup.Item>{word}</ListGroup.Item>)}
                {/* <ListGroup.Item>Biography</ListGroup.Item>
                <ListGroup.Item>engineer</ListGroup.Item>
                <ListGroup.Item>company</ListGroup.Item>
                <ListGroup.Item>writer</ListGroup.Item>
                <ListGroup.Item>indian</ListGroup.Item> */}
                </ListGroup>
            </Col>

            <div className='translate'>
            <Form.Select onChange={(e) => setLang(e.target.value)} aria-label="Default select example trans" className='trans'>
            <option value= " ">Choose a Language to translate summary</option>
  <option value="AF">Afrikaans</option>
  <option value="SQ">Albanian</option>
  <option value="AR">Arabic</option>
  <option value="HY">Armenian</option>
  <option value="EU">Basque</option>
  <option value="BN">Bengali</option>
  <option value="BG">Bulgarian</option>
  <option value="CA">Catalan</option>
  <option value="KM">Cambodian</option>
  <option value="ZH">Chinese (Mandarin)</option>
  <option value="HR">Croatian</option>
  <option value="CS">Czech</option>
  <option value="DA">Danish</option>
  <option value="NL">Dutch</option>
  <option value="EN">English</option>
  <option value="ET">Estonian</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finnish</option>
  <option value="FR">French</option>
  <option value="KA">Georgian</option>
  <option value="DE">German</option>
  <option value="EL">Greek</option>
  <option value="GU">Gujarati</option>
  <option value="HE">Hebrew</option>
  <option value="HI">Hindi</option>
  <option value="HU">Hungarian</option>
  <option value="IS">Icelandic</option>
  <option value="ID">Indonesian</option>
  <option value="GA">Irish</option>
  <option value="IT">Italian</option>
  <option value="JA">Japanese</option>
  <option value="JW">Javanese</option>
  <option value="KO">Korean</option>
  <option value="LA">Latin</option>
  <option value="LV">Latvian</option>
  <option value="LT">Lithuanian</option>
  <option value="MK">Macedonian</option>
  <option value="MS">Malay</option>
  <option value="ML">Malayalam</option>
  <option value="MT">Maltese</option>
  <option value="MI">Maori</option>
  <option value="MR">Marathi</option>
  <option value="MN">Mongolian</option>
  <option value="NE">Nepali</option>
  <option value="NO">Norwegian</option>
  <option value="FA">Persian</option>
  <option value="PL">Polish</option>
  <option value="PT">Portuguese</option>
  <option value="PA">Punjabi</option>
  <option value="QU">Quechua</option>
  <option value="RO">Romanian</option>
  <option value="RU">Russian</option>
  <option value="SM">Samoan</option>
  <option value="SR">Serbian</option>
  <option value="SK">Slovak</option>
  <option value="SL">Slovenian</option>
  <option value="ES">Spanish</option>
  <option value="SW">Swahili</option>
  <option value="SV">Swedish </option>
  <option value="TA">Tamil</option>
  <option value="TT">Tatar</option>
  <option value="TE">Telugu</option>
  <option value="TH">Thai</option>
  <option value="BO">Tibetan</option>
  <option value="TO">Tonga</option>
  <option value="TR">Turkish</option>
  <option value="UK">Ukrainian</option>
  <option value="UR">Urdu</option>
  <option value="UZ">Uzbek</option>
  <option value="VI">Vietnamese</option>
  <option value="CY">Welsh</option>
  <option value="XH">Xhosa</option>
  </Form.Select>
            </div>
            
            <Button variant="outline-primary" onClick={handleTranslate}>Get Translated Text</Button>{' '}
            <div style={{paddingTop : 10}}>
                <h4>Translated Text</h4>
                <p>{translatedText}</p>
            </div>
        </Row>
        </Container>
        </div>


        
    )
    

}

export default Home;