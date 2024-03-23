import React from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./InformationHub.css"
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png"
import CenturyTower from "./CenturyTower.png"
import Malachowsky from "./Malachowsky.png"

const InformationHub = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <img src={PlazaOfTheAmericas} alt="Plaza of the Americas - UF" className="LP-bg-img" />
            </div>

            <div>
                <img src={CenturyTower} alt="Century Tower - UF" className="LP-bg-img2" />
            </div>

            <div>
                <img src={Malachowsky} alt="Malachowsky - UF" className="LP-bg-img3" />
            </div>

            <Navbar />

            <div className="IH-title-container">
                <div className="LP-title-text">
                   Information Hub
                </div>
            </div>

            <div className="IH-title-2-container">
                <div className="LP-title-2-text">
                    Discover essential research links to enhance leadership skills, foster DEI initiatives, explore funding options, and master club procedures
                </div>
            </div>

            <div className="IH-content-container">
                {/* DEI */}
                <div className="IH-section-head-container" style={{marginTop: "0%"}}>
                    <div className="IH-section-head-text">
                        Diversity, Equality, and Inclusion
                    </div>

                    <div className="IH-section-body-container">
                        <div className="IH-section-body-text">
                            DEI 1
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 1
                            </div>
                        </div>
                        
                        <div className="IH-section-body-text">
                            DEI 2
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 2
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            DEI 3
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 3
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            DEI 4
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 4
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            DEI 5
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 5
                            </div>
                        </div>
                    </div>
                </div>

                {/* Funding */}
                <div className="IH-section-head-container">
                    <div className="IH-section-head-text">
                        Funding
                    </div>

                    <div className="IH-section-body-container">
                        <div className="IH-section-body-text">
                            Funding 1
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 1
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Funding 2
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 2
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Funding 3
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 3
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Funding 4
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 4
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Funding 5
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 5
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership Development */}
                <div className="IH-section-head-container">
                    <div className="IH-section-head-text">
                        Leadership Development
                    </div>

                    <div className="IH-section-body-container">
                        <div className="IH-section-body-text">
                            Leadership 1
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 1
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Leadership 2
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 2
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Leadership 3
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 3
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Leadership 4
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 4
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Leadership 5
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 5
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to start a club */}
                <div className="IH-section-head-container">
                    <div className="IH-section-head-text">
                        Starting a Student Organization
                    </div>

                    <div className="IH-section-body-container">
                        <div className="IH-section-body-text">
                            Starting Org 1
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 1
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Starting Org 2
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 2
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Starting Org 3
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 3
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Starting Org 4
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 4
                            </div>
                        </div>

                        <div className="IH-section-body-text">
                            Starting Org 5
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Explanation 5
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InformationHub