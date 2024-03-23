import React from "react"
import Navbar from "../Navbar/Navbar"
import "./LandingPage.css"

const LandingPage = () => {

    return (
        <div className="LP-background">
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

        

            
        </div>
    )
}

export default LandingPage