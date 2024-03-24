import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./CreatePost.css"
import { initializePost } from "../functions/Post"
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"

const CreatePost = () => {
    const navigate = useNavigate();
    const [searchHovered, setSearchHovered] = useState(false);
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [content, setContent] = useState("");

    const searchButtonStyle = {
        backgroundColor: searchHovered ? '#A0FFDD' : '#E9967A',
        borderColor: searchHovered ? '#A0FFDD' : '#A0FFDD',
        color: searchHovered ? '#E9967A' : '#FFFFFF',
        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
    };

    const CreateAPost = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const displayName = user.displayName;
                const currDate = new Date(); // board, author, club, date, text, title
                initializePost(tag, displayName, "", currDate, content, title);
            } else {
                console.error("Not logged in.")
            }
        })

        return null;
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
            <div className="QF-title-container">
                <div className="QF-title-text">
                   Create a Post
                </div>
            </div>

            {/* title */}
            <div className="CP-post-title-container mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title"  onChange={(event) => {setTitle(event.target.value)}} value={title}/>
            </div>

            <div className="CP-post-tags-container mb-3">
                <select className="form-select" id="exampleFormControlSelect1" onChange={(event) => {setTag(event.target.value)}}>
                    <option selected="Announcements">Announcements</option>
                    <option value="Rules">Rules</option>
                    <option value="Events">Events</option>
                    <option value="Advertisements">Advertisements</option>
                    <option value="Opportunities">Opportunities</option>
                </select>
            </div>

            <div class="CP-post-text-container mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Content" rows="8" onChange={(event) => {setContent(event.target.value)}} value={content}></textarea>
            </div>

            <button className="CP-create-post-btn btn btn-outline-success NVB-text-color" style={searchButtonStyle} onMouseEnter={handleSearchHover} onMouseLeave={handleSearchMouseLeave} type="submit"
                onClick={CreateAPost}>
                Create
            </button>
           
        </div>
    )
}

export default CreatePost