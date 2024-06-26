import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./NewClubInfo.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeClub, retrieveAllClubs } from "../functions/Club";


const NewClubInfo = () => {
    const navigate = useNavigate();
    const [searchHovered, setSearchHovered] = useState(false);
    const [clubList, setClubList] = useState([]);           // todo: get club list (see below)
    const [clubName, setClubName] = useState("");
    const [newClub, setNewClub] = useState(false);
    const [president, setPresident] = useState("");
    const [vicePresident, setVicePresident] = useState("");
    const [treasurer, setTreasurer] = useState("");
    const [description, setDescription] = useState("");
    const auth = getAuth();

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // todo: get list of all clubs from database, I don't think through this though
    //     }
    // });


    const searchButtonStyle = {
        backgroundColor: searchHovered ? '#A0FFDD' : '#E9967A',
        borderColor: searchHovered ? '#A0FFDD' : '#A0FFDD',
        color: searchHovered ? '#E9967A' : '#FFFFFF',
        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
    };

    const CreateClub = () => {
        initializeClub(clubName, description, president, vicePresident, treasurer);
        navigate("/home");
    }

    useEffect(() => {
        if (localStorage.getItem('LoggedIn') === "false") {
            navigate("/")
        }
        const fetchData = async () => {
            const list = await retrieveAllClubs();
            setClubList(list);
            console.log(list);
        }
        fetchData();
    }, []);

    const handleSearchHover = () => {
        setSearchHovered(true);
    };

    const handleSearchMouseLeave = () => {
        setSearchHovered(false);
    };

    const handleCheckbox = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setNewClub(!newClub);
    }


    return (
        <div className="QF-bg">
            <Navbar />

            {/* title */}
            <div className="NCI-title-container">
                <div className="NCI-title-text">
                   Oops! We don't have information on that club. Please help us add it to our records!
                </div>
            </div>

            {/* is your club here? */}          
            <div className="NCI-club-container mr-3">
                 <select style={{width: "50%"}}> 
                    {clubList.map((option, index) => (<option key={index} value={option.name}>{option.name}</option>))}
                </select> 

                <div>
                    <label className="NCI-label">
                        Is This Club Not Here?
                    </label>
                    <input className="NCI-checkbox" type="checkbox" id="is_new" name="is_new" onChange={handleCheckbox} value={newClub} />
                </div>
            </div>

            {newClub && (
                <>
                    {/* club name */}
                    <div className="NCI-club-name-container mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Club Name" onChange={(event) => {setClubName(event.target.value)}} value={clubName}/>
                    </div>

                    <div className="NCI-person-name-container">
                        {/* president name */}
                        <input type="email" className="NCI-person-item form-control" id="exampleFormControlInput1" placeholder="President Name" onChange={(event) => {setPresident(event.target.value)}} value={president}/>

                        {/* vice president name */}
                        <input type="email" className="NCI-person-item form-control" id="exampleFormControlInput1" placeholder="Vice President Name" onChange={(event) => {setVicePresident(event.target.value)}} value={vicePresident}/>

                        {/* treasurer name */}
                        <input type="email" className="NCI-person-item form-control" id="exampleFormControlInput1" placeholder="Treasurer Name" onChange={(event) => {setTreasurer(event.target.value)}} value={treasurer}/>
                    </div>

                    <div class="NCI-post-text-container mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Description" rows="3" onChange={(event) => {setDescription(event.target.value)}} value={description}></textarea>
                    </div>

                    <button className="CP-create-post-btn btn btn-outline-success NVB-text-color" style={searchButtonStyle} onMouseEnter={handleSearchHover} onMouseLeave={handleSearchMouseLeave} type="submit"
                        onClick={CreateClub}>
                        Create Club
                    </button>
                </>
            )}
            
        </div>
    )
}

export default NewClubInfo