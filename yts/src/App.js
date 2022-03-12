import React from 'react';
import './App.css';
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
        <div className="App">
          
          <Header/>
        
            <Home/>
            
            <Login/>
            <Register/>
     
    </div>
   
    

    
  );
}

export default App;
