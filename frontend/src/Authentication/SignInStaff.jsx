import React from "react";
import './SignInStaff.css';
import examiner from '../assets/examiner.png';
import customer from '../assets/customer.png';

function SignInStaff(){
    return(
        <div className="signinstaff-container">
        <h2>Welcome back, Staff!</h2>
        <h3>Enter your Credentials to access your account</h3>
        <form className="signinstaff-form">
            <label>Email address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button type="submit" className="signinstaff-button"><a href="/staff">Login</a></button>

            <div className="or-divider"><span>Or</span></div>

            <div className="social-buttons">
            <button className="social-button staff"><img src={customer} className="signup-img"/><a href="/signin">Sign in with Customer</a></button>
            <button className="social-button examiner"><img src={examiner} className="signup-img"></img><a href="/ExaminerSignin">Sign in with Examiner</a></button>
            </div>
        </form>
        </div>
    );
}
export default SignInStaff;