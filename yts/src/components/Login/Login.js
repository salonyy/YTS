import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div class="login-page">
                <div class="form">
                    
                    <form class="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button className='btnn'>Login</button>
                        <p class="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>

            )
    

}

            export default Login