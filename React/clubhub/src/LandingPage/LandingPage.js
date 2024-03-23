import React from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./LandingPage.css"
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png"

const LandingPage = () => {
    const navigate = useNavigate();

    const GoToCreateAccount = () => {
        navigate("/createaccount");
    }


    return (
        <div>
            <div>
                <img src={PlazaOfTheAmericas} alt="Plaza of the Americas - UF" className="LP-bg-img" />
            </div>

            <Navbar />

            <div className="LP-title-container">
                <div className="LP-title-text">
                   Welcome to ClubHub
                </div>
            </div>

            <div className="LP-title-2-container">
                <div className="LP-title-2-text">
                   The Ultimate Guide to Student Organizations
                </div>
            </div>

            {/* log in */}
            <div>
                <button type="button" class="btn btn-lg NVB-bg-color LP-login-btn">Log In</button>
            </div>

            {/* create account */}
            <div>
                <button type="button" class="btn btn-lg NVB-bg-color LP-create-btn" onClick={GoToCreateAccount}>Create Account</button>
            </div>

            {/* learn more */}
            <div>
                <button type="button" class="btn btn-lg NVB-bg-color LP-learn-btn">Learn More</button>
            </div>
        </div>
    )
}

export default LandingPage