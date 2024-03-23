import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./CreateAccount.css";
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const CreateAccount = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleCreateAccount = async (event) => {
        event.preventDefault();

        if (validateInput()) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Set display name
                await updateProfile(user, {
                    displayName: name
                });

                console.log("User created:", user);
                navigate("/login");
            } catch (error) {
                console.error("Error creating user:", error.message);
            }
        } else {
            console.log("Invalid input");
        }
    };

    const validateInput = () => {
        const nameRegex = /^\w+\s\w+$/;
        const emailRegex = /^\S+@ufl\.edu$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,20}$/;

        if (!nameRegex.test(name)) {
            console.error("Invalid name format");
            return false;
        }

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
        <>
            <div>
                <img src={PlazaOfTheAmericas} alt="Plaza of the Americas - UF" className="LP-bg-img" />
            </div>

            <Navbar />

            <div className="CA-title-container">
                <div className="CA-title-text">
                    Please Create an Account
                </div>
            </div>

            <form onSubmit={handleCreateAccount}>
                {/* name */}
                <div className="CA-name-text row g-3 align-items-center">
                    <div className="col-auto">
                        <input type="text" className="form-control" placeholder="Name" aria-describedby="nameHelp"
                               onChange={(event) => setName(event.target.value)}
                               value={name}
                        />
                    </div>
                    <div className="col-auto">
                        <span id="nameHelp" className="form-text CA-help-text">
                            Please enter your first name and last name
                        </span>
                    </div>
                </div>

                {/* email */}
                <div className="CA-email-text row g-3 align-items-center">
                    <div className="col-auto">
                        <input type="text" className="form-control" placeholder="Email" aria-describedby="emailHelp"
                               onChange={(event) => setEmail(event.target.value)}
                               value={email}
                        />
                    </div>
                    <div className="col-auto">
                        <span id="emailHelp" className="form-text CA-help-text">
                            Emails must end in '@ufl.edu'
                        </span>
                    </div>
                </div>

                {/* password */}
                <div className="CA-password-text row g-3 align-items-center">
                    <div className="col-auto">
                        <input type="password" className="form-control" placeholder="Password" aria-describedby="passwordHelp"
                               onChange={(event) => setPassword(event.target.value)}
                               value={password}
                        />
                    </div>
                    <div className="col-auto">
                        <span id="passwordHelp" className="form-text CA-help-text">
                            Passwords must be 8-20 characters long and include at least one symbol, letter, and number
                        </span>
                    </div>
                </div>

                {/* create account button */}
                <button type="submit" className="btn btn-lg NVB-bg-color CA-create-btn">
                    Create Account
                </button>
            </form>
        </>
    )
}

export default CreateAccount;
