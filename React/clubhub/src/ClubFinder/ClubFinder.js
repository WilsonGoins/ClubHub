import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./ClubFinder.css"
import { useParams } from "react-router-dom"

const ClubFinder = () => {
    const navigate = useNavigate();
    const { clubName } = useParams();
    const [selected, setSelected] = useState(false);
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

            {!selected && (
                <>
                    <div className="CF-title-container">
                        <div className="CF-title-text">
                            Clubs:
                        </div>
                    </div>

                    <div className="CF-clubs-container">
                        {testArray.map((item, title) => (
                            <div key={item}>
                                <button className="CF-clubs-button btn btn-outline-success NVB-text-color" style={navItemStyles}
                                    onClick={() => {setSelected(true)}}>
                                    <p>{item.title}</p>
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {selected && (
                <>
                    <div className="CF-title-container">
                        <div className="CF-title-text">
                            NO
                        </div>
                    </div>
                </>
            )}


        </>
    )
}

export default ClubFinder
