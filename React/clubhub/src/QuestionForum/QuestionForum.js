import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import DandelionAPI from "../DandelionAPI"
import "./QuestionForum.css"

const QuestionForum = () => {
    const navigate = useNavigate();
    const [searchHovered, setSearchHovered] = useState(false);
    const [userQuery, setUserQuery] = useState("")
    const [queryRes, setQueryRes] = useState([]);
    const [simScore, setSimScore] = useState(0.0);

    const searchButtonStyle = {
        backgroundColor: searchHovered ? '#A0FFDD' : '#E9967A',
        borderColor: searchHovered ? '#A0FFDD' : '#A0FFDD',
        color: searchHovered ? '#E9967A' : '#FFFFFF',
        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
    };

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

    const getResults = async (event) => {           // TODO: jake compare to database, the function
        event.preventDefault();

        const myStr = "how to make a student organization";
        const sampleStr = "creating a club for students";
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
        <div className="QF-bg">
            <Navbar />

            {/* search bar */}
            <form className="QF-search-bar d-flex" role="search" onSubmit={(event) => {getResults(event)}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {setUserQuery(event.target.value)}} value={userQuery} />
                <button className="btn btn-outline-success  NVB-text-color" style={searchButtonStyle} onMouseEnter={handleSearchHover} onMouseLeave={handleSearchMouseLeave} type="submit">
                    Search
                </button>
            </form>

            <div className="QF-title-container">
                <div className="QF-title-text">
                   Question Forum
                </div>
            </div>
            <div className="QF-title-text" style={{position: "absolute", top: "50%", left: "30%"}}>
                   Similarity Score: {simScore}
            </div>
        </div>
    )
}

export default QuestionForum