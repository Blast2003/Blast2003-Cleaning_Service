import React, { useState } from "react";
import './SignInExaminer.css';
import staff from '../assets/staff.png';
import customer from '../assets/customer.png';

import examinerAtom from "../atom/examinerAtom";
import { useSetRecoilState } from "recoil";
import ErrorLabel from "../Components/HandleError/ErrorLabel";
import { Link } from "react-router-dom";

function SignInExaminer(){

    // const showToast = userShowToast();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const setExaminer = useSetRecoilState(examinerAtom)
    const [errorMessage, setErrorMessage] = useState(null)
    // console.log(inputs)

    const handleLogin =async () =>{
        setErrorMessage(null)
        try {
            //fetch
            const res = await fetch("/api/examiner/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs)
            })
            const data = await res.json()
            console.log(data)
            if(data.error){
                console.log("Error detected:", data.error)

                setErrorMessage(data.error)
                // Hide error message after 3 seconds
                setTimeout(() => {
                    setErrorMessage(null);
                }, 2000);
                return
            }

            localStorage.setItem("examiner-cleanings", JSON.stringify(data)); // local storage inside frontend server
            setExaminer(data)
        } catch (error) {
            setErrorMessage(error)

            // Hide error message after 3 seconds
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }
    }

    return(
        <div className="signinexa-container">
        {errorMessage && <ErrorLabel errorMessage={errorMessage}/>}
        <h2>Welcome back, Examiner!</h2>
        <h3>Enter your Credentials to access your account</h3>
        <form className="signinexa-form">
            <label>Email address</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setInputs({...inputs, email: e.target.value})} value={inputs.email} required/>

            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setInputs({...inputs, password: e.target.value})} value={inputs.password} required/>

            <button type="button" className="signinexa-button" onClick={handleLogin}>Login</button>

            <div className="or-divider"><span>Or</span></div>

            <div className="social-buttons">
            <button className="social-button staff"><img src={customer} className="signup-img"/><Link to="/signin">Sign in with Customer</Link></button>
            <button className="social-button examiner"><img src={staff} className="signup-img"></img><Link to="/StaffSignin">Sign in with Staff</Link></button>
            </div>
        </form>
        </div>
    );
}
export default SignInExaminer;