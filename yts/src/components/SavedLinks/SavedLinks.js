import React from 'react'
import './savedlinks.css'
import { Button, ListGroup, Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'

const SavedLinks=()=>{
    return (
        <div className='savedLinks'>
            <h2 className='sl'>Saved Links⭐</h2>
            <div >
                <ListGroup>
                
                <ListGroup.Item className='linkitem'>https://www.youtube.com/watch?v=Ez_kyBS-y5w</ListGroup.Item>
                <ListGroup.Item className='linkitem'>https://www.youtube.com/watch?v=h_kAcVuJEm0</ListGroup.Item>
                <ListGroup.Item className='linkitem'>https://www.youtube.com/watch?v=Ez_kyBS-y5w</ListGroup.Item>
                <ListGroup.Item className='linkitem'>https://www.youtube.com/watch?v=h_kAcVuJEm0</ListGroup.Item>
                <ListGroup.Item className='linkitem'>https://www.youtube.com/watch?v=Ez_kyBS-y5w</ListGroup.Item>
                </ListGroup>
            </div>
           <Button className='btns'>Delete</Button>
           <Button className='btns'>Delete All</Button>
    
        </div>
        
    )
    

}

export default SavedLinks;