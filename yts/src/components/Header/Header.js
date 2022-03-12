import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './header.css'

const Header=()=>{
    return (
        <div>
            <Navbar expand="lg" fixed="top" className="navbar ">

                <Container className="">

                    <Navbar.Brand href="/" className="nav-brand">
                        Youtube-Summarizer
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="nav-r" id="responsive-navbar-nav">
                        <Nav className="nav me-auto">
                            <Nav.Link className="nav-link" href={"/links" }>Saved Links</Nav.Link>
                            <Nav.Link className="nav-link" href={"/contact" }>Contact</Nav.Link>
                            <Nav.Link className="nav-link" href={"/aboutus" }>About Us</Nav.Link>
                            
                            
                            <Button className="nav-btn" >Login</Button>
                            <Button className="nav-btn" >Register</Button>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    )
    

}

export default Header;