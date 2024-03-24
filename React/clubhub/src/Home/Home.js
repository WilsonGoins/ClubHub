import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./Home.css"
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png"
import {onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase';


const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {

        console.log(localStorage)
        if (localStorage.getItem('LoggedIn') === "false") {
            navigate("/")
            }
    }, []);

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
                <button type="button" class="btn btn-lg NVB-bg-color LP-create-btn" onClick={() => {navigate("/questionforum")}}>Question Forum</button>
            </div>

            {/* Club Finder */}
            <div>
                <button type="button" class="btn btn-lg NVB-bg-color LP-learn-btn" onClick={()=> {navigate("/clubfinder")}}>Find Clubs</button>
            </div>
        </div>
    )
}

export default Home