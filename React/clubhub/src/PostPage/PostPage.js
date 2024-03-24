import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./PostPage.css"

const PostPage = () => {
    const [searchHovered, setSearchHovered] = useState(false);
    const [postUser, setPostUser] = useState("");
    const [postTags, setPostTags] = useState("");
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
    const getPostTags = () => {
        const tags = "Comp Sci, Comp E"
        setPostTags(tags);
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
        getPostTags();
        getPostUser();
        getPostText();
    }, []);

    return (
        <div> 
            <Navbar/>
        
            <form class="d-flex PP-search-bar" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success  NVB-text-color" type="submit" style={navItemStyle} onMouseEnter={handleSearchHover} onMouseLeave={handleSearchMouseLeave}>Search</button>
            </form>

            <div className="PP-header-container">
                <div className="PP-header-text">
                    Search for a new post
                </div>
            </div>

            <div className="PP-title-container">
                <div className="PP-title-text">
                    {postTitle}
                </div>
                <div className="PP-tag-text">
                    Tags: {postTags}
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