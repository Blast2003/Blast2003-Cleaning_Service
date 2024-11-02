import React, { useState } from 'react';
import './SignUp.css';
import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';

const SignUp = () => {

    const[action, setAction] = useState("Sign Up");

    return (
        <div className='signup-container'>
            <div className="signup-header">
                <div className="signup-text">{action}</div>
                <div className="signup-underline"></div>
            </div>
            <div className="signup-inputs">
                <div className="signup-input">
                    <img src={user_icon} alt="" />
                    <input type='text' placeholder='Name'/>
                </div>
            </div>
            <div className="signup-inputs">
                <div className="signup-input">
                    <img src={email_icon} alt="" />
                    <input type='email' placeholder='Email address'/>
                </div>
            </div>
            <div className="signup-inputs">
                {action === "Login"?<div></div>:
                <div className="signup-input">
                    <img src={password_icon} alt="" />
                    <input type='password' placeholder='Password'/>
                </div>}
            </div>
            {action === "Sign Up" ? <div></div>:
            <div className="signup-forgot-password">
                Lost Password? <span>Click Here</span>
            </div>}
            <div className="signup-submit-container">
                <div className={action === "Login"?"signup-submit gray":"signup-submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up"?"signup-submit gray":"signup-submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    );
}
export default SignUp;