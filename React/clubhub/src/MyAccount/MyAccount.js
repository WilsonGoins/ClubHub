import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./MyAccount.css"
import UserImage from "./UserImage.jpg"
import { initializeUserProfile, retrieveUserData, retrieveUserProfile, addClub } from "../functions/User"
import { findClub} from "../functions/Club"
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"

const MyAccount = () => {

    const fetchData = async (targetEmail) => {
        const data = await retrieveUserProfile(targetEmail);
        setClubList(data.clubs);
        console.log(data.name);
    }

    const AddClub = async () => { // TODO: write to backend
        try {
            const newClub = await findClub(clubToAdd)
            await addClub(email, newClub);
            navigate("/myaccount");
            fetchData(email);
        } catch (error) {
            console.error("Error found: ", error);
            navigate("/newclubinfo");
        }
    }

    useEffect(() => {
        console.log("effect");
        if (!true) {     // TODO: check if they are NOT logged in   IMPORTANT
            navigate("/")
        }
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setName(user.displayName)
                setEmail(user.email);
                fetchData(user.email);
            }
        })
        if (clubToAdd != "") {
            
        }
    }, []);

    const navigate = useNavigate();
    const [searchHovered, setSearchHovered] = useState(false);
    const [clubToAdd, setClubToAdd] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [clubList, setClubList] = useState([]);
    const [clubFound, foundState] = useState(null);

    const searchButtonStyle = {
        backgroundColor: searchHovered ? '#A0FFDD' : '#E9967A',
        borderColor: searchHovered ? '#A0FFDD' : '#A0FFDD',
        color: searchHovered ? '#E9967A' : '#FFFFFF',
        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
    };

    

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
                    My Clubs:
                </div>

                {clubList && (
                    <ul>
                        {clubList.map((item, index) => (
                            <li key={index} className="MA-club-text" onClick={() => {navigate(item)}}>{item}</li>
                        ))}
                    </ul>
                )}
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