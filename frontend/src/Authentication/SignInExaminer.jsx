import React from "react";
import './SignInExaminer.css';
import staff from '../assets/staff.png';
import customer from '../assets/customer.png';

function SignInExaminer(){
    return(
        <div className="signinexa-container">
        <h2>Welcome back, Examiner!</h2>
        <h3>Enter your Credentials to access your account</h3>
        <form className="signinexa-form">
            <label>Email address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button type="submit" className="signinexa-button"><a href="/examiner">Login</a></button>

            <div className="or-divider"><span>Or</span></div>

            <div className="social-buttons">
            <button className="social-button staff"><img src={customer} className="signup-img"/><a href="/signin">Sign in with Customer</a></button>
            <button className="social-button examiner"><img src={staff} className="signup-img"></img><a href="/StaffSignin">Sign in with Staff</a></button>
            </div>
        </form>
        </div>
    );
}
export default SignInExaminer;