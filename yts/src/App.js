import React from 'react';
import './App.css';

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import SavedLinks from './components/SavedLinks/SavedLinks'
import About from './components/About/About'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (

        <div className="App">

            

            {/* <Home/>
            
            <Login/>
            <Contact/>
            <Footer/> */}

            {/*  */}

            <Router>
                <div>
                   
                    <Header/> 

                



                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="links" element={<SavedLinks />} />
                        <Route path="about" element={<About />} />
                    </Routes>
                    <Footer/>
                </div>
            </Router>
            {/*  */}
        </div>




    );
}

export default App;
