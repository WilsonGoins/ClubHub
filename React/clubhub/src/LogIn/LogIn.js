import React, { useState } from "react";
import "./LogIn.css";
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png";
import Navbar from "../Navbar/Navbar";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogIn = (event) => {
        event.preventDefault();

        if (validateInput()) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    // Navigate to home page after successful login
                    navigate("/home");
                })
                .catch(error => {
                    // Handle login errors
                    console.error("Error signing in:", error.message);
                });
        }
    };

    const validateInput = () => {
        const emailRegex = /^\S+@ufl\.edu$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,20}$/;

        if (!emailRegex.test(email)) {
            console.error("Invalid email format");
            return false;
        }

        if (!passwordRegex.test(password)) {
            console.error("Invalid password format");
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
                               onChange={(event) => setEmail(event.target.value)}
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
                               onChange={(event) => setPassword(event.target.value)}
                               value={password}
                        />
                    </div>
                    <div className="col-auto">
                        <span id="passwordHelp" className="form-text" style={{ color: '#FFFFFF' }}>
                            Passwords must be 8-20 characters long and include at least one symbol, letter, and number
                        </span>
                    </div>
                </div>

                {/* login button */}
                <div>
                    <button type="submit" className="btn btn-lg NVB-bg-color LI-login-btn">Log In</button>
                </div>
            </form>

        </div>
    )
}

export default LogIn;
