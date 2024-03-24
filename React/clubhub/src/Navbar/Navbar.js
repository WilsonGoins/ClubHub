import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

const Navbar = () => {
    const navigate = useNavigate();
    const [searchHovered, setSearchHovered] = useState(false);
    const [navItemHovered, setNavItemHovered] = useState({
        clubHub: false,
        informationHub: false,
        questionForum: false,
        eventSchedule: false,
        donateToWilson: false
    });
    const [dispName, setDispName] = useState("");

    const navigationFunction = (_page) => {
        console.log(_page)
        console.log(localStorage.getItem('LoggedIn'))
        if (_page === "/home") { // different if block because this is for clicking "ClubHub" which should go back to landing page
            console.log(_page)
            if (localStorage.getItem('LoggedIn') === 'true') {
                navigate("/home");
            } else {
                navigate("/");
            }
        }
        else {
            console.log('not /home')
            console.log(_page)
            console.log(localStorage.getItem('LoggedIn'))
            if (localStorage.getItem('LoggedIn') == "true") {
                navigate(_page);
            } else {
                console.log("hello");
                navigate("/createaccount");
            }
        }
    }

    const searchButtonStyle = {
        backgroundColor: searchHovered ? '#A0FFDD' : '#E9967A',
        borderColor: searchHovered ? '#A0FFDD' : '#A0FFDD',
        color: searchHovered ? '#E9967A' : '#FFFFFF',
        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
    };

    const navItemStyles = {
        clubHub: {
            color: navItemHovered.clubHub ? '#A0FFDD' : '#FFFFFF',
            transition: 'color 0.3s',
            marginLeft: "35px",
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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setDispName(user.displayName)
            }
        })
    }, []);

    return (
        <nav className="navbar navbar-expand-lg NVB-bg-color">
            <div className="container-fluid">
                <a className="navbar-brand NVB-text-color" style={navItemStyles.clubHub} onMouseEnter={() => handleNavItemHover('clubHub')} onMouseLeave={() => handleNavItemMouseLeave('clubHub')}
                    onClick={() => navigationFunction("/home")}>
                    ClubHub
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link NVB-text-color" aria-current="page" style={navItemStyles.informationHub} onMouseEnter={() => handleNavItemHover('informationHub')} onMouseLeave={() => handleNavItemMouseLeave('informationHub')}
                                onClick={() => { navigationFunction("/informationhub") }}>
                                Information Hub
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link NVB-text-color" style={navItemStyles.questionForum} onMouseEnter={() => handleNavItemHover('questionForum')} onMouseLeave={() => handleNavItemMouseLeave('questionForum')}
                                onClick={() => { navigationFunction("/questionforum") }}>
                                Question Forums
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link NVB-text-color" aria-disabled="true" style={navItemStyles.eventSchedule} onMouseEnter={() => handleNavItemHover('eventSchedule')} onMouseLeave={() => handleNavItemMouseLeave('eventSchedule')}
                                onClick={() => { navigationFunction("/clubfinder") }}>
                                Find Clubs
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link NVB-text-color" aria-disabled="true" style={navItemStyles.donateToWilson} onMouseEnter={() => handleNavItemHover('donateToWilson')} onMouseLeave={() => handleNavItemMouseLeave('donateToWilson')}
                                onClick={() => { navigationFunction("/myaccount") }}>
                                My Account: {dispName}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
