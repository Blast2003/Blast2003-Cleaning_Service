import React from "react";
import './SignIn.css';
import examiner from '../assets/examiner.png';
import staff from '../assets/staff.png'
import { Link } from "react-router-dom";

function SignIn(){
    return(
        <div className="signin-container">
        <h2>Welcome back, customer!</h2>
        <h3>Enter your Credentials to access your account</h3>
        <form className="signin-form">
            <label>Email address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button type="submit" className="signin-button"><a href="/home">Login</a></button>

            <div className="or-divider"><span>Or</span></div>

            <div className="social-buttons">
            <button className="social-button staff"><img src={staff} className="signup-img"></img>Sign in with Staff</button>
            <button className="social-button examiner"><img src={examiner} className="signup-img"></img>Sign in with Examiner</button>
            </div>

            <div className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
            </div>
        </form>
        </div>
    );
}
export default SignIn;