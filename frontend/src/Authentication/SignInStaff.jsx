import React, { useState } from "react";
import './SignInStaff.css';
import examiner from '../assets/examiner.png';
import customer from '../assets/customer.png';
import { useSetRecoilState } from "recoil";
import staffAtom from "../atom/staffAtom";
import ErrorLabel from "../Components/HandleError/ErrorLabel";
import { Link } from "react-router-dom";
function SignInStaff(){

    // const showToast = userShowToast();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const setStaff = useSetRecoilState(staffAtom)
    const [errorMessage, setErrorMessage] = useState(null)
    // console.log(inputs)

    const handleLogin =async () =>{
        setErrorMessage(null)
        try {
            //fetch
            const res = await fetch("/api/staff/login", {
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

            localStorage.setItem("staff-cleanings", JSON.stringify(data)); // local storage inside frontend server
            setStaff(data)
        } catch (error) {
            setErrorMessage(error)
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }
    }

    return(
        <div className="signinstaff-container">
        {errorMessage && <ErrorLabel errorMessage={errorMessage}/>}
        <h2>Welcome back, Staff!</h2>
        <h3>Enter your Credentials to access your account</h3>
        <form className="signinstaff-form">
            <label>Email address</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setInputs({...inputs, email: e.target.value})} value={inputs.email} required/>

            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setInputs({...inputs, password: e.target.value})} value={inputs.password} required/>

            <button type="button" className="signinstaff-button" onClick={handleLogin}>Login</button>

            <div className="or-divider"><span>Or</span></div>

            <div className="social-buttons">
            <button className="social-button staff"><img src={customer} className="signup-img"/><Link to="/signin">Sign in with Customer</Link></button>
            <button className="social-button examiner"><img src={examiner} className="signup-img"></img><Link to="/ExaminerSignin">Sign in with Examiner</Link></button>
            </div>
        </form>
        </div>
    );
}
export default SignInStaff;