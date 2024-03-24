import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./MyAccount.css"
import UserImage from "./UserImage.jpg"

const MyAccount = () => {
    const navigate = useNavigate();
    const [searchHovered, setSearchHovered] = useState(false);
    const [clubToAdd, setClubToAdd] = useState("");
    const name = "Wilson Goins";
    const email = "wilson.goins@ufl.edu";
    const clubList = ["OSC", "SASE", "SwampHacks", "LinearLovers"];     // TODO: get club list from database

    const searchButtonStyle = {
        backgroundColor: searchHovered ? '#A0FFDD' : '#E9967A',
        borderColor: searchHovered ? '#A0FFDD' : '#A0FFDD',
        color: searchHovered ? '#E9967A' : '#FFFFFF',
        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
    };

    const AddClub = () => { // TODO: write to backend
       console.log(clubToAdd);
    }

    useEffect(() => {
        if (!true) {     // TODO: check if they are NOT logged in                                IMPORTANT
            navigate("/")
        }
    }, []);

    const handleSearchHover = () => {
        setSearchHovered(true);
    };

    const handleSearchMouseLeave = () => {
        setSearchHovered(false);
    };


    return (
        <div className="QF-bg">
            <Navbar />

            {/* title */}
            <div className="MA-title-container">
                <div className="MA-title-text">
                   My Account
                </div>
            </div>

            {/* image */}
            <img className="MA-image" src={UserImage} alt="User Image"></img>

            {/* title */}
            <div className="MA-name-container">
                <div className="MA-name-text">
                    {name}
                </div>
            </div>

            {/* email */}
            <div className="MA-email-container">
                <div className="MA-name-text">
                    {email}
                </div>
            </div>

            {/* clubs */}
            <div className="MA-club-container">
                <div className="MA-title-text">
                    My Clubs
                </div>

                <ul>
                    {clubList.map((item, index) => (
                        <li key={index} className="MA-club-text" onClick={() => {navigate(item)}}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* add a club */}
            <div className="MA-add-club-container">
                <div className="MA-title-text"> Add a Club</div>

                <div class="mb-3">
                    <input class="form-control" id="exampleFormControlInput1" placeholder="Add a Club Affiliation" onChange={(event) => {setClubToAdd(event.target.value)}} value={clubToAdd}/>
                </div>
            </div>

            <button className="MA-add-club-btn btn btn-outline-success NVB-text-color" style={searchButtonStyle} onMouseEnter={handleSearchHover} onMouseLeave={handleSearchMouseLeave} type="submit"
                onClick={AddClub}>
                Add Club
            </button>
           
        </div>
    )
}

export default MyAccount