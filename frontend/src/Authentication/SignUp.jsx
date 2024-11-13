import React, { useState } from "react";
import './SignUp.css';
import examiner from '../assets/examiner.png';
import staff from '../assets/staff.png'
import customerAtom from "../atom/customerAtom";
import { useSetRecoilState } from "recoil";

function SignUp(){

    const [inputs, setInputs] = useState({
        name: "",
        email:"",
        password:"",
        phone:"",
        address:""
      });
    
    //   const showToast = userShowToast();
      const setCustomer = useSetRecoilState(customerAtom)
      const handleSignup = async() => {
        try {
            const res = await fetch("/api/user/signup", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs)
            })
            const data = await res.json()
            console.log(data)
            if(data.error){
                // showToast("Error", data.error, "error")
                console.log("Error detected:", data.error)
                return
            }
    
            localStorage.setItem("user-cleanings", JSON.stringify(data)); // local storage inside frontend server
            setCustomer(data)
        } catch (error) {
            // showToast("Error", error, "error")
        }
    }

    return(
        <div className="signup-container">
        <h2>Get Started Now</h2>
        <form className="signup-form">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" onChange={(e) => setInputs({...inputs, name: e.target.value})} value={inputs.name}/>

            <label>Email address</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setInputs({...inputs, email: e.target.value})} value={inputs.email}/>

            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setInputs({...inputs, password: e.target.value})} value={inputs.password}/>

            <label>Phone</label>
            <input type="text" placeholder="Enter your phone" onChange={(e) => setInputs({...inputs, phone: e.target.value})} value={inputs.phone}/>

            <label>Address</label>
            <input type="text" placeholder="Enter your address" onChange={(e) => setInputs({...inputs, address: e.target.value})} value={inputs.address}/>

            <div className="terms">
            <input type="checkbox" required/>
            <span>I agree to the terms & policy</span>
            </div>

            <button type="button" className="signup-button" onClick={handleSignup}>Signup</button>

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