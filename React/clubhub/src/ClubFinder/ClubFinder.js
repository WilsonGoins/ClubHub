import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./ClubFinder.css"

const ClubFinder = () => {
    const navigate = useNavigate();
    const [clubsRes, setClubsRes] = useState([]);
    const testArray = [
        { title: "OSC", /* other properties */ },
        { title: "SASE", /* other properties */ },
        { title: "SHPE", /* other properties */ },
        { title: "SPCB", /* other properties */ },
        { title: "WILSON LOVERS", /* other properties */ }
    ];
    const navItemStyles = {
        backgroundColor: '#A0FFDD',
        borderColor: '#A0FFDD',
        color: '#E9967A'
    }
    
    return(
        <>
            <Navbar/>

            <div className="CF-title-container">
                <div className="CF-title-text">
                    Clubs:
                </div>
            </div>

            <div className="CF-clubs-container">
                {clubsRes.map((club, name) => (
                    <div key={club}>
                        <button className="CF-clubs-button btn btn-outline-success NVB-text-color" style={navItemStyles} onClick={() => {navigate("/" + "${club.name}")}}>
                            <p>{club.name}</p>
                        </button>
                    </div>
                ))}
            </div>

        </>
    )
}

export default ClubFinder
