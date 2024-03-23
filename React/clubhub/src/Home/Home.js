import React from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./Home.css"
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png"

const Home = () => {
    const navigate = useNavigate();

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

            {/* Information Hub */}
            <div>
                <button type="button" class="btn btn-lg NVB-bg-color LP-login-btn" onClick={() => {navigate("/informationhub")}}>Information Hub</button>
            </div>

            {/* Question Forum */}
            <div>
                <button type="button" class="btn btn-lg NVB-bg-color LP-create-btn" onClick={() => {navigate("/")}}>Question Forum</button>
            </div>

            {/* Event Scheudle */}
            <div>
                <button type="button" class="btn btn-lg NVB-bg-color LP-learn-btn" onClick={()=> {navigate("/")}}>Event Schedule</button>
            </div>
        </div>
    )
}

export default Home