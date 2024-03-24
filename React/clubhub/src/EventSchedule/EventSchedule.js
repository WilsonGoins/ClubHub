import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./EventSchedule.css"

const EventSchedule = () => {
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
                   Welcome to Event Schedule
                </div>
            </div>
        </div>
    )
}

export default EventSchedule