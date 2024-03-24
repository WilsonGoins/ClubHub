import React, { useState } from "react";
import "./LogIn.css";
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png";
import Navbar from "../Navbar/Navbar";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

localStorage.setItem('LoggedIn', true); // true or false


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const handleLogIn = (event) => {
        event.preventDefault();

        if (validateInput()) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    // Navigate to home page after successful login
                    navigate("/home");
                    localStorage.setItem('LoggedIn', true);
                })
                .catch(error => {
                    // Handle login errors
                    console.error("Error signing in:", error.message);
                    
                });
        }
    };

    const errorMessage = () => {
        if(loginError){
            return (
                <div className="LI-alert-container">
                        <div className="LI-alert">Invalid email or password. Please try again.</div>
                </div>
            );
        }
        else{
            return null;
        }
    }

    const GoToCreateAccount = () => {
        navigate("/createaccount");
    }

    const validateInput = () => {
        const emailRegex = /^\S+@ufl\.edu$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,20}$/;

        if (!emailRegex.test(email)) {
            console.error("Invalid email format");
            setLoginError(true);
            return false;
        }

        if (!passwordRegex.test(password)) {
            console.error("Invalid password format");
            setLoginError(true);
            return false;
        }

        return true;
    };

    return (
        <div>
            <div>
                <img src={PlazaOfTheAmericas} alt="Plaza of the Americas - UF" className="LI-bg-img" />
            </div>

            <Navbar />

            <div className="LI-title-container">
                <div className="LI-title-text">
                    Please Log Into Your Account
                </div>
            </div>

            <form onSubmit={handleLogIn}>

                {/* email */}
                <div className="row g-3 align-items-center LI-email-box">
                    <div className="col-auto">
                        <input type="text" placeholder="Email" className="form-control" aria-describedby="emailHelp"
                               onChange={(event) => {setEmail(event.target.value); setLoginError(false)}}
                               value={email}
                        />
                    </div>
                    <div className="col-auto">
                        <span id="emailHelp" className="form-text" style={{ color: '#FFFFFF' }}>
                            Emails must end in '@ufl.edu'
                        </span>
                    </div>
                </div>

                {/* password */}
                <div className="row g-3 align-items-center LI-password-box">
                    <div className="col-auto">
                        <input type="password" placeholder="Password" className="form-control" aria-describedby="passwordHelp"
                               onChange={(event) => {setPassword(event.target.value); setLoginError(false)}}
                               value={password}
                        />
                    </div>
                    <div className="col-auto">
                        <span id="passwordHelp" className="form-text" style={{ color: '#FFFFFF' }}>
                            Passwords must be 8-20 characters long and include at least one symbol, letter, and number
                        </span>
                    </div>
                </div>
                
                {/* Error message */}
                {errorMessage()}

                {/* login button */}
                <div>
                    <button type="submit" className="btn btn-lg NVB-bg-color LI-login-btn">Log In</button>
                </div>
            </form>

            {/* Create Account Button */}
            <div>
                <button type="submit" className="btn btn-lg NVM-bg-color LI-create-account-btn" onClick={GoToCreateAccount}>Create Account</button>
            </div>

        </div>
    )
}

export default LogIn;
