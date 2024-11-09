import React from "react";
import './SignUp.css';
import examiner from '../assets/examiner.png';
import staff from '../assets/staff.png'

function SignUp(){
    return(
        <div className="signup-container">
        <h2>Get Started Now</h2>
        <form className="signup-form">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <div className="terms">
            <input type="checkbox" />
            <span>I agree to the terms & policy</span>
            </div>

            <button type="submit" className="signup-button">Signup</button>

            <div className="or-divider"><span>Or</span></div>

            <div className="social-buttons">
            <button className="social-button staff"><img src={staff} className="signup-img"></img><a href="/StaffSignin">Sign in with Staff</a></button>
            <button className="social-button examiner"><img src={examiner} className="signup-img"></img><a href="/ExaminerSignin">Sign in with Examiner</a></button>
            </div>

            <div className="signin-link">
            Have an account? <a href="/signin">Sign In</a>
            </div>
        </form>
        </div>
    );
}
export default SignUp;