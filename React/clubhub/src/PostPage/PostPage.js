import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./PostPage.css"

const PostPage = () => {
    const [searchHovered, setSearchHovered] = useState(false);
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

    const getPostTitle = () => {
        const title = "Example Post"
        setPostTitle(title);
    };
    const getPostForum = () => {
        const forum = "Announcement"
        setPostForum(forum);
    };
    const getPostUser = () => {
        const user = "xX_Lazzy_Xx"
        setPostUser(user);
    };
    const getPostText = () => {
        const text = "This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words. This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words. This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words. This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words. This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words. This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words. This is an example post. Reading this won't get you much information, and reading it again you'll notice that no question is asked. This is intention. This post has no purpose other than being a placeholder of users' beautiful words."
        setPostText(text);
    };
    useEffect(() => {
        getPostTitle();
        getPostForum();
        getPostUser();
        getPostText();
    }, []);

    return (
        <div> 
            <Navbar/>
        
            <form class="d-flex PP-search-bar" role="search">
                <input class="form-control me-2" type="search" placeholder="Search for another post" aria-label="Search" />
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

            <div className="PP-comment-section-container">
                <div className="PP-comment-title-text">
                    Comments:
                </div>
                <div className="PP-comment-container">
                    Nick Says:
                    <br />
                    WOmen? NeV3r heArD oV3r.
                </div>
                <div className="PP-comment-container">
                    Jake Says:
                    <br />
                    Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make my crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make my crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make my crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make my crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make my crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make my crazy.
                </div>
                <div className="PP-comment-container">
                    Wilson Says:
                    <br />
                    Okay Guys.
                </div>
                <div className="PP-comment-container">
                    Eddy Says:
                    <br />
                    Poggers!
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default PostPage