import React from 'react'
import './home.css'
import './yt.jpg'
import {InputGroup , Text, FormControl, Button, Container, Row, Col, ListGroup, Form} from "react-bootstrap";

const Home=()=>{
    return (
        <div className='container home'>
           
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-link" >Paste Youtube Link</InputGroup.Text>
                <FormControl
                aria-label="Link"
                aria-describedby="inputGroup-sizing-link"
                />
            </InputGroup>

            <Button variant="outline-primary">Get Summary</Button>{' '}

        {/* <div className='sum' id='summary'>
            <p className='sum'>Summary</p>
        </div> */}

        <Container className="sum">
        <Row>
            <Col sm={8} className='sec'>
            <h4>Summary</h4>
            <p>Sudha Murty also taught at Christ University. She has written and published many books, of which two are travelogues, two technical books, six novels, and three educative books.A writer, philanthropist and entrepreneur, Sudha Murthy is greatly revered for being a prolific writer, facilitating the education of poor children and for being one of the brains behind Infosys, one of India’s leading IT company.
Sudha Murty became the first female engineer hired at India's largest auto manufacturer TATA Engineering and Locomotive Company (TELCO).
She joined the company as a Development Engineer in Pune and then worked in Mumbai & Jamshedpur as well.</p>

            </Col>

            <Col sm={4} className='sec'>
               <h4>Genre and Keywords</h4>
               <ListGroup>
                
                <ListGroup.Item>Biography</ListGroup.Item>
                <ListGroup.Item>engineer</ListGroup.Item>
                <ListGroup.Item>company</ListGroup.Item>
                <ListGroup.Item>writer</ListGroup.Item>
                <ListGroup.Item>indian</ListGroup.Item>
                </ListGroup>
            </Col>

            <div className='translate'>
            <Form.Select aria-label="Default select example trans" className='trans'>
            <option>Choose a Language to translate summary</option>
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

            <Button variant="outline-success save">Save Link</Button>{' '}
        </Row>
        </Container>
        </div>


        
    )
    

}

export default Home;