import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './header.css'
import {
    
    Link,
    Routes
} from "react-router-dom";

const Header=()=>{
    return (
        <div>
            <Navbar expand="lg" fixed="top" className="navbar ">

                <Container className="nav">

                    <Navbar.Brand href="/" className="nav-brand">
                        
                    <Link className='link' to="/">Youtube-Summarizer</Link>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="nav-r" id="responsive-navbar-nav">
                        <Nav className="nav me-auto">
                        <Nav.Link className="nav-link" href={"/" }><Link className='link' to="/">Home</Link></Nav.Link>
                            <Nav.Link className="nav-link" href={"/links" }><Link className='link' to="/links">Saved Links</Link></Nav.Link>
                            <Nav.Link className="nav-link" href={"/contact" }><Link className='link' to="/contact">Contact</Link></Nav.Link>
                            <Nav.Link className="nav-link" href={"/about" }><Link className='link' to="/about">About Us</Link></Nav.Link>
                            
                            
                            <Button className="nav-btn" > <Link  className='link' to="/login">Login</Link></Button>
                            



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    )
    

}

export default Header;