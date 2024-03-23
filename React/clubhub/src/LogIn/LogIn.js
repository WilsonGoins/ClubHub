import React from "react"
import "./LogIn.css"
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png"
import Navbar from "../Navbar/Navbar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LogIn = () => {
        if (ValidateStuff()) {
            console.log(email, password, " are good!");
            navigate("/home");
        }
        else {
            console.log("bad");
        }
    }

    const ValidateStuff = () => {
        const emailRegex = /^\S+@ufl\.edu$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,20}$/;

        if (!emailRegex.test(email)) {
            return false;
        }

        if (!passwordRegex.test(password)) {
            return false;
        }

        return true;
    }

    return (
        <div>
            <div>
                <img src={PlazaOfTheAmericas} alt="Plaza of the Americas - UF" className="LI-bg-img" />
            </div>

            <Navbar/>

            <div className="LI-title-container">
                <div className="LI-title-text">
                Please Log Into Your Account
                </div>"
            </div>

            <form onSubmit={LogIn}>

                {/* email */}
                <div class="row g-3 align-items-center" className="LI-email-box">
                    <div class="col-auto">
                        <input type="text" placeholder="Email" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        />
                    </div>
                    <div class="col-auto">
                        <span id="passwordHelpInline" class="form-text" style={{color: '#FFFFFF'}}>
                        Emails must end in '@ufl.edu'
                        </span>
                    </div>
                </div>

                {/* password */}
                <div class="row g-3 align-items-center" className="LI-password-box">
                    <div class="col-auto">
                        <input type="password" placeholder="Password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        />
                    </div>
                    <div class="col-auto">
                        <span id="passwordHelpInline" class="form-text" style={{color: '#FFFFFF'}}>
                        Passwords must be 8-20 characters long and include at least one symbol, letter, and number
                        </span>
                    </div>
                </div>
    
                {/* login button */}
                <div>
                    <button type="button" class="btn btn-lg NVB-bg-color LI-login-btn" onClick={LogIn}>Log In</button>
                </div>
            </form>

        </div>
    )
}

export default LogIn 
