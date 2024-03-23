import React, {useState} from "react"
import {useNavigate} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const [searchHovered, setSearchHovered] = useState(false);
    const [navItemHovered, setNavItemHovered] = useState({
        clubHub: false,
        informationHub: false,
        questionForum: false,
        eventSchedule: false,
        donateToWilson: false
    });

    const searchButtonStyle = {
        backgroundColor: searchHovered ? '#A0FFDD' : '#E9967A',
        borderColor: searchHovered ? '#A0FFDD' : '#A0FFDD',
        color: searchHovered ? '#E9967A' : '#FFFFFF',
        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
    };

    const navItemStyles = {
        clubHub: {
            color: navItemHovered.clubHub ? '#A0FFDD' : '#FFFFFF',
            transition: 'color 0.3s'
        },
        informationHub: {
            color: navItemHovered.informationHub ? '#A0FFDD' : '#FFFFFF',
            transition: 'color 0.3s'
        },
        questionForum: {
            color: navItemHovered.questionForum ? '#A0FFDD' : '#FFFFFF',
            transition: 'color 0.3s'
        },
        eventSchedule: {
            color: navItemHovered.eventSchedule ? '#A0FFDD' : '#FFFFFF',
            transition: 'color 0.3s'
        },
        donateToWilson: {
            color: navItemHovered.donateToWilson ? '#A0FFDD' : '#FFFFFF',
            transition: 'color 0.3s'
        }
    };

    const handleSearchHover = () => {
        setSearchHovered(true);
    };

    const handleSearchMouseLeave = () => {
        setSearchHovered(false);
    };

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

    return (
        <nav class="navbar navbar-expand-lg NVB-bg-color">
            <div class="container-fluid">
                <a class="navbar-brand NVB-text-color" href="#" style={navItemStyles.clubHub} onMouseEnter={() => handleNavItemHover('clubHub')} onMouseLeave={() => handleNavItemMouseLeave('clubHub')}>ClubHub</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link NVB-text-color" aria-current="page" href="#" style={navItemStyles.informationHub} onMouseEnter={() => handleNavItemHover('informationHub')} onMouseLeave={() => handleNavItemMouseLeave('informationHub')}>Information Hub</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link NVB-text-color" href="#" style={navItemStyles.questionForum} onMouseEnter={() => handleNavItemHover('questionForum')} onMouseLeave={() => handleNavItemMouseLeave('questionForum')}>Question Forum</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link NVB-text-color" aria-disabled="true" style={navItemStyles.eventSchedule} onMouseEnter={() => handleNavItemHover('eventSchedule')} onMouseLeave={() => handleNavItemMouseLeave('eventSchedule')}>Event Schedule</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle NVB-text-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={navItemStyles.donateToWilson} onMouseEnter={() => handleNavItemHover('donateToWilson')} onMouseLeave={() => handleNavItemMouseLeave('donateToWilson')}>
                        Donate to Wilson
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Give Kisses</a></li>
                        <li><a class="dropdown-item" href="#">Give Money</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Give Praise and Admiration</a></li>
                    </ul>
                    </li>
                    
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success  NVB-text-color" style={searchButtonStyle} onMouseEnter={handleSearchHover} onMouseLeave={handleSearchMouseLeave} type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar