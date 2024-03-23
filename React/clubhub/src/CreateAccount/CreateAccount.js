import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./CreateAccount.css"
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png"



const CreateAccount = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const CreateAccount = () => {
        if (ValidateStuff()) {
            console.log(name, email, password, " are good!");
            navigate("/home");
        }
        else {
            console.log("bad");
        }
    }   

    const ValidateStuff = () => {
        const nameRegex = /^\w+\s\w+$/;
        const emailRegex = /^\S+@ufl\.edu$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,20}$/;

        if (!nameRegex.test(name)) {
            return false;
        }

        if (!emailRegex.test(email)) {
            return false;
        }

        if (!passwordRegex.test(password)) {
            return false;
        }

        return true;
    }

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

            <form onSubmit={CreateAccount}>
                {/* name */}
                <div class="CA-name-text row g-3 align-items-center">
                    <div class="col-auto">
                        <input type="text" id="inputPassword6" class="form-control" placeholder="Name" aria-describedby="passwordHelpInline" 
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                        />
                    </div>
                    <div class="col-auto">
                        <span id="passwordHelpInline" class="form-text CA-help-text">
                        Please enter your first name and last name
                        </span>
                    </div>
                </div>

                {/* email */}
                <div class="CA-email-text row g-3 align-items-center">
                    <div class="col-auto">
                        <input type="text" id="inputPassword6" class="form-control" placeholder="Email" aria-describedby="passwordHelpInline"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                        />
                    </div>
                    <div class="col-auto">
                        <span id="passwordHelpInline" class="form-text CA-help-text">
                        Emails must end in '@ufl.edu'
                        </span>
                    </div>
                </div>

                {/* password */}
                <div class="CA-password-text row g-3 align-items-center">
                    <div class="col-auto">
                        <input type="password" id="inputPassword6" class="form-control" placeholder="Password" aria-describedby="passwordHelpInline" 
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                        />
                    </div>
                    <div class="col-auto">
                        <span id="passwordHelpInline" class="form-text CA-help-text">
                        Passwords must be 8-20 characters long and include at least one symbol, letter, and number
                        </span>
                    </div>
                </div>

                {/* create account button */}
                <button type="button" class="btn btn-lg NVB-bg-color CA-create-btn" onClick={CreateAccount}>
                    Create Acount
                </button>
            </form>

        </>
    )   
}

export default CreateAccount;