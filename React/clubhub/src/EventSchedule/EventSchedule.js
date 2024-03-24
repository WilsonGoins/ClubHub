import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./EventSchedule.css"
import {onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase';



const EventSchedule = () => {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            console.log(user)
            if (!user) {
                navigate("/")
            }
        })
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