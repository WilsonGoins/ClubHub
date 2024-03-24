import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./QuestionForum.css"

const QuestionForum = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!true) {     // TODO: check if they are NOT logged in                                IMPORTANT
            navigate("/")
        }
    }, []);

    return (
        <div>
            <Navbar />

            <div className="LP-title-container">
                <div className="LP-title-text">
                   Question Forum
                </div>
            </div>
        </div>
    )
}

export default QuestionForum