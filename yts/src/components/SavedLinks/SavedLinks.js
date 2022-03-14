import React from 'react'
import './savedlinks.css'
import {InputGroup , Text, FormControl, Button, Container, Row, Col, ListGroup, Form} from "react-bootstrap";

const SavedLinks=()=>{
    return (
        <div className='savedLinks'>
            <div id = 'border'>
                <ListGroup>
                
                <ListGroup.Item>Biography</ListGroup.Item>
                <ListGroup.Item>engineer</ListGroup.Item>
                <ListGroup.Item>company</ListGroup.Item>
                <ListGroup.Item>writer</ListGroup.Item>
                <ListGroup.Item>indian</ListGroup.Item>
                </ListGroup>
            </div>
           <Button>Delete</Button>
           <Button>Delete All</Button>
    
        </div>
        
    )
    

}

export default SavedLinks;