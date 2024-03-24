import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./ClubFinder.css"
import { useParams } from "react-router-dom"

const ClubFinder = () => {
    const navigate = useNavigate();
    const [isSelected, setIsSelected] = useState(false);
    const [selectedClub, setSelectedClub] = useState("")
    const [clubsRes, setClubsRes] = useState([]);
    const testArray = [
        { title: "Open Source Club", /* other properties */ },
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
    const navItemStyles2 = {
        backgroundColor: '#E9967A',
        borderColor: '#E9967A',
        color: '#FFFFFF'
    }
    
    return(
        <>
            <Navbar/>

            {!isSelected && (
                <>
                    <div className="CF-title-container">
                        <div className="CF-title-text">
                            Clubs:
                        </div>
                    </div>

                    <div className="CF-clubs-container">
                        {testArray.map((club, title) => (
                            <div key={club}>
                                <button className="CF-clubs-button btn btn-outline-success NVB-text-color" style={navItemStyles}
                                    onClick={() => {{setIsSelected(true)}; {setSelectedClub(club.title)}}}>
                                    <p>{club.title}</p>
                                </button>
                            </div>
                        ))}
                        
                        <div className="CF-new-club-txt" onClick={() => {navigate("/newclubinfo")}}>
                   
                            Can't find an org? Help us out by adding it here!
                        </div>

                    </div>
                </>
            )}

            {isSelected && (
                <>
                    <button className="CF-create-btn btn btn-outline-success NVB-text-color" style={navItemStyles2}
                    onClick={() => {setIsSelected(false)}}>
                        Back
                    </button>

                    <div className="CF-title-container">
                        <div className="CF-title-text">
                            {selectedClub}
                        </div>
                    </div>

                    <div className="CF-textbox-roles">
                        <div className="CF-club-role-text">
                            President:
                            <br />
                            Jonathan
                            <br />
                            <br />
                            Vice-President:
                            <br />
                            Anton
                            <br />
                            <br />
                            Treasurer:
                            <br />
                            Grayson
                            <br />
                        </div>
                    </div>

                    <div className="CF-textbox-description">
                        <div className="CF-club-role-text">
                            Description:
                            <br />    
                            <br />
                        </div>

                        <div className="CF-body-text">
                            This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words. This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words. This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words.
                        </div>
                    </div>

                </>
            )}


        </>
    )
}

export default ClubFinder
