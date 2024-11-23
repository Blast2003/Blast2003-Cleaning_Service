import { useState } from 'react';
import './SignIn.css';
import examiner from '../assets/examiner.png';
import staff from '../assets/staff.png'
import customerAtom from "../atom/customerAtom";
import { useSetRecoilState } from "recoil";
import ErrorLabel from '../Components/HandleError/ErrorLabel';
import { Link } from 'react-router-dom';

function SignIn(){
    // const showToast = userShowToast();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const setCustomer = useSetRecoilState(customerAtom)
    const [errorMessage, setErrorMessage] = useState(null);
    // console.log(inputs)

    const handleLogin =async () =>{
        setErrorMessage(null)
        try {
            //fetch
            const res = await fetch("/api/user/login", {
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
                setErrorMessage(data.error);
                // Hide error message after 3 seconds
                setTimeout(() => {
                    setErrorMessage(null);
                }, 2000);

                return
            }

            localStorage.setItem("user-cleanings", JSON.stringify(data)); // local storage inside frontend server
            setCustomer(data)
        } catch (error) {
            setErrorMessage(error)
            // Hide error message after 3 seconds
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }
    }


    return(
        <div className="signin-container">
        {errorMessage && <ErrorLabel errorMessage={errorMessage} />}
        <h2>Welcome back, customer!</h2>
        <h3>Enter your Credentials to access your account</h3>
        <form className="signin-form">
            <label>Email address</label>
            <input type="text" placeholder="Enter your email" onChange={(e) => setInputs({...inputs, email: e.target.value})} value={inputs.email}/>

            <label>Password</label>
            <input type="text" placeholder="Enter your password" onChange={(e) => setInputs({...inputs, password: e.target.value})} value={inputs.password}/>

            <button type='button' className="signin-button" onClick={handleLogin}>Login</button>

            <div className="or-divider"><span>Or</span></div>

            <div className="social-buttons">
            <button className="social-button staff"><img src={staff} className="signup-img"></img><Link to="/StaffSignin">Sign in with Staff</Link></button>
            <button className="social-button examiner"><img src={examiner} className="signup-img"></img><Link to="/ExaminerSignin">Sign in with Examiner</Link></button>
            </div>

            <div className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
            </div>
        </form>
        </div>
    );
}
export default SignIn;