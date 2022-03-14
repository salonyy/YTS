import React from 'react'
import './login.css'

const Login=()=>{
    return (
        <div className='login'>
           <div id = "form_container">     
                <br/> 
                <input type = "text" name = "email" placeholder = "Email id" ></input>
                <input type = "text" name = "password" placeholder = "Password" ></input>
                <br/>
                <button id = "Formbutton">Login</button>
                <a href=''>Register</a>
            </div>
        </div>
        
    )
    

}

export default Login;