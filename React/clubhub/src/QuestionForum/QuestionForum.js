import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import DandelionAPI from "../DandelionAPI"
import "./QuestionForum.css"
import {onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase';

const QuestionForum = () => {
    const navigate = useNavigate();
    const [searchHovered, setSearchHovered] = useState(false);
    const [searched, setSearched] = useState(false);
    const [navItemHovered, setNavItemHovered] = useState({
        createPost: false,
        search: false,
        announcements: false,
        rules: false,
        events: false,
        advertisements: false,
        opportunities: false
    });
    const [userQuery, setUserQuery] = useState("")
    const [queryRes, setQueryRes] = useState([]);
    const [simScore, setSimScore] = useState(0.0);
    const testArray = [
        { title: "OSC", /* other properties */ },
        { title: "SASE", /* other properties */ },
        { title: "SHPE", /* other properties */ },
        { title: "SPCB", /* other properties */ },
        { title: "WILSON LOVERS", /* other properties */ }
    ];
    

    const navItemStyles = {
        createPost: {
            backgroundColor: navItemHovered.createPost ? '#A0FFDD' : '#E9967A',
            borderColor: navItemHovered.createPost ? '#A0FFDD' : '#A0FFDD',
            color: navItemHovered.createPost ? '#E9967A' : '#FFFFFF',
            transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
        },
        search: {
            backgroundColor: navItemHovered.search ? '#A0FFDD' : '#E9967A',
            borderColor: navItemHovered.search ? '#A0FFDD' : '#A0FFDD',
            color: navItemHovered.search ? '#E9967A' : '#FFFFFF',
            transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
        },
        announcements: {
            backgroundColor: navItemHovered.announcements ? '#A0FFDD' : '#E9967A',
            borderColor: navItemHovered.announcements ? '#A0FFDD' : '#A0FFDD',
            color: navItemHovered.announcements ? '#E9967A' : '#FFFFFF',
            transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
        },
        rules: {
            backgroundColor: navItemHovered.rules ? '#A0FFDD' : '#E9967A',
            borderColor: navItemHovered.rules ? '#A0FFDD' : '#A0FFDD',
            color: navItemHovered.rules ? '#E9967A' : '#FFFFFF',
            transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
        },
        events: {
            backgroundColor: navItemHovered.events ? '#A0FFDD' : '#E9967A',
            borderColor: navItemHovered.events ? '#A0FFDD' : '#A0FFDD',
            color: navItemHovered.events ? '#E9967A' : '#FFFFFF',
            transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
        },
        advertisements: {
            backgroundColor: navItemHovered.advertisements ? '#A0FFDD' : '#E9967A',
            borderColor: navItemHovered.advertisements ? '#A0FFDD' : '#A0FFDD',
            color: navItemHovered.advertisements ? '#E9967A' : '#FFFFFF',
            transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
        },
        opportunities: {
            backgroundColor: navItemHovered.opportunities ? '#A0FFDD' : '#E9967A',
            borderColor: navItemHovered.opportunities ? '#A0FFDD' : '#A0FFDD',
            color: navItemHovered.opportunities ? '#E9967A' : '#FFFFFF',
            transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
        }
    };


    useEffect(() => {
        console.log(localStorage)
        if (localStorage.getItem('LoggedIn') === "false") {                                   
            navigate("/")
        }
    }, []);

    const handleNavItemHover = (itemName) => {
        setNavItemHovered(prevState => ({
            ...prevState,
            [itemName]: true
        }));
    };

    const handleNavItemMouseLeave = (itemName) => {
        setNavItemHovered(prevState => ({
            ...prevState,
            [itemName]: false
        }));
    };

    const getResults = async (event) => {           // TODO: jake compare to database, the function
        event.preventDefault();

        setSearched(true);
        const myStr = "how to make a student organization";
        const sampleStr = "cresating a club for students";
        const _simScore = 0.0;

        const endpoint = `https://api.dandelion.eu/datatxt/sim/v1/?text1=${myStr}&text2=${sampleStr}&token=${DandelionAPI}`;
        fetch(endpoint).then(response => response.json()).then(data => {
            const similarity = data.similarity; // Assuming 'similarity' is the key in the response JSON object
            setSimScore(similarity);
        })

        // console.log(response);
        // console.log(response.body.similarity);

        // setSimScore(response.similarity);
        
        // const similarities = [];
        // const database = [];
        // database.forEach(title => {             // TODO: Jake needs to fix this so it accessed database correctly
        //     const similarityScore = new Levenshtein(userQuery.toLowerCase(), title.toLowerCase()).distance;
        //     similarities.push({ title, similarityScore });
        // });
        // similarities.sort((a, b) => a.similarityScore - b.similarityScore);
        // setQueryRes(similarities);
    };

    return (
        <>
            <Navbar />

            {/* search bar */}
            <form className="QF-search-bar d-flex" role="search" onSubmit={(event) => {getResults(event)}}>
                <input className="form-control me-2" type="search" placeholder="Search for a Post" aria-label="Search" onChange={(event) => {setUserQuery(event.target.value)}} value={userQuery} />
                <button className="btn btn-outline-success  NVB-text-color" style={navItemStyles.search} onMouseEnter={() => handleNavItemHover('search')} onMouseLeave={() => handleNavItemMouseLeave('search')} type="submit">
                    Search
                </button>
            </form>

            {/* title */}
            <div className="QF-title-container">
                <div className="QF-title-text">
                Question Forums
                </div>
            </div>

            {/* create post button */}
            <button className="QF-create-btn btn btn-outline-success NVB-text-color" style={navItemStyles.createPost} onMouseEnter={() => handleNavItemHover('createPost')} onMouseLeave={() => handleNavItemMouseLeave('createPost')}
            onClick={() => {navigate("/createpost")}}>
                Create a Post
            </button>

            {!searched && (
                <>
                    <button className="QF-forum-announcements btn btn-outline-success NVB-text-color" style={navItemStyles.announcements} onMouseEnter={() => handleNavItemHover('announcements')} onMouseLeave={() => handleNavItemMouseLeave('announcements')}
                        onClick={() => {navigate("/createpost")}}>
                        Announcements
                    </button>

                    <button className="QF-forum-rules btn btn-outline-success NVB-text-color" style={navItemStyles.rules} onMouseEnter={() => handleNavItemHover('rules')} onMouseLeave={() => handleNavItemMouseLeave('rules')}
                        onClick={() => {navigate("/createpost")}}>
                        Rules
                    </button>

                    <button className="QF-forum-events btn btn-outline-success NVB-text-color" style={navItemStyles.events} onMouseEnter={() => handleNavItemHover('events')} onMouseLeave={() => handleNavItemMouseLeave('events')}
                        onClick={() => {navigate("/createpost")}}>
                        Events
                    </button>

                    <button className="QF-forum-advertisements btn btn-outline-success NVB-text-color" style={navItemStyles.advertisements} onMouseEnter={() => handleNavItemHover('advertisements')} onMouseLeave={() => handleNavItemMouseLeave('advertisements')}
                        onClick={() => {navigate("/createpost")}}>
                        Advertisements
                    </button>

                    <button className="QF-forum-opportunities btn btn-outline-success NVB-text-color" style={navItemStyles.opportunities} onMouseEnter={() => handleNavItemHover('opportunities')} onMouseLeave={() => handleNavItemMouseLeave('opportunities')}
                        onClick={() => {navigate("/createpost")}}>
                        Opportunities
                    </button>

                    <div className="QF-forum-title-container-site-wide">
                        <div className="QF-forum-title-text">
                            Site-Wide:
                        </div>
                    </div>

                    <div className="QF-forum-title-container-general">
                        <div className="QF-forum-title-text">
                            General:
                        </div>
                    </div>
                </>
            )}

            {searched && (
                <>
                    <div className="QF-forum-top-results">
                        <div className="QF-forum-title-text">
                            Top Results:
                        </div>
                    </div>

                    <div className="QF-results-container">
                        {queryRes.slice(0, 5).map((result, index) => (
                            <div key={index}>
                                <button className="QF-results-forums btn btn-outline-success NVB-text-color" style={navItemStyles.opportunities}
                                    onClick={() => {navigate("/createpost")}}>
                                    <p>{result.title}</p>
                                </button>
                            </div>
                        ))}
                    </div>

                </>
            )}


        </>
    )
}

export default QuestionForum