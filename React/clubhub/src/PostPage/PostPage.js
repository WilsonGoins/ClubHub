import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./PostPage.css"
import { initializePost } from "../functions/Post"
import { collection, query, where, orderBy, getDocs, forumPosts } from "firebase/firestore";
import { firestore } from '../firebase';


const PostPage = () => {
    const [searchHovered, setSearchHovered] = useState(false);
    const [userQuery, setUserQuery] = useState("");
    const [postUser, setPostUser] = useState("");
    const [postForum, setPostForum] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postText, setPostText] = useState("");
    const navItemStyle = {
        backgroundColor: searchHovered ? '#A0FFDD' : '#E9967A',
        borderColor: searchHovered ? '#A0FFDD' : '#A0FFDD',
        color: searchHovered ? '#E9967A' : '#FFFFFF',
        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
    }

    const handleSearchHover = () => {
        setSearchHovered(true);
    };

    const handleSearchMouseLeave = () => {
        setSearchHovered(false);
    };


    const fetchData = async (event, targetName) => {
        event.preventDefault();


        const postsRef = collection(firestore, "forumPosts");
        let q = query(postsRef);


        q = query(q, where("text", "==", targetName));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            const res = doc.data();
            setPostUser(res.author);
            setPostText(res.text);
            setPostForum(res.board);
            setPostTitle(res.title);
        });
    }


    return (

        <div>
            <Navbar/>
            <form class="d-flex PP-search-bar" role="search" onSubmit={(event) => {fetchData(event, userQuery)}}>
                <input class="form-control me-2" type="search" placeholder="Search for another post" aria-label="Search"
                    onChange={(event) => {setUserQuery(event.target.value)}} value={userQuery}/>
                <button class="btn btn-outline-success  NVB-text-color" type="submit" style={navItemStyle} onMouseEnter={handleSearchHover} onMouseLeave={handleSearchMouseLeave}>Search</button>
            </form>

            <div className="PP-title-container">
                <div className="PP-title-text">
                    {postTitle}
                </div>
                <div className="PP-forum-text">
                    {postForum}
                </div>
            </div>

            <div className="PP-post-container">
                <div className="PP-post-text">
                    {postText}
                    <br />
                    <br />
                </div>
                <div className="PP-user-text">
                    Post By: {postUser}
                </div>
            </div>
        </div>
    )
}

export default PostPage