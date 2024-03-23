import React from "react"
import {useNavigate} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg NVB-bg-color">
            <div class="container-fluid">
                <a class="navbar-brand NVB-text-color" href="#">ClubHub</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link NVB-text-color" aria-current="page" href="#">Information Hub</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link NVB-text-color" href="#">Question Forum</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link NVB-text-color" aria-disabled="true">Event Schedule</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle NVB-text-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    <button class="btn btn-outline-success  NVB-text-color" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar