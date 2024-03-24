import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./InformationHub.css"
import PlazaOfTheAmericas from "./PlazaOfTheAmericas.png"
import CenturyTower from "./CenturyTower.png"
import Malachowsky from "./Malachowsky.png"

const InformationHub = () => {
    const navigate = useNavigate();

    const DEI1 = "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-diversity-equity-and-inclusion";
    const DEI2 = "https://www.forbes.com/sites/forbescoachescouncil/2021/09/08/14-tips-for-implementing-dei-initiatives-that-actually-succeed/?sh=483e6e1a4088"
    const DEI3 = "https://peopleadmin.com/blog/diversity-guide-top-10-practical-steps-for-advancing-diversity-equity-and-inclusion-in-higher-education/";
    const DEI4 = "https://www.linkedin.com/pulse/7-ways-dei-harming-your-company-how-resolve-brian-dapelo/"
    const DEI5 = "https://www.forbes.com/sites/theyec/2023/04/03/10-reasons-why-dei-efforts-fail-and-how-to-ensure-they-succeed/?sh=1b9905eb2696";
    const FUN1 = "https://sg.ufl.edu/resources/budget/";
    const FUN2 = "https://www.dojiggy.com/blog/6-innovative-ways-to-fundraise-for-your-student-organization/";
    const FUN3 = "https://sapro.moderncampus.com/blog/5-ways-student-organizations-can-stay-on-budget-while-meeting-their-goals";
    const FUN4 = "https://www.afterschoolalliance.org/loa10TipsSponsors.cfm";
    const FUN5 = "https://classrooms.com/where-can-you-find-grants-for-college-student-organizations/#google_vignette";
    const LDR1 = "https://www.park.edu/blog/how-to-develop-exceptional-leadership-skills-a-comprehensive-guide-to-becoming-a-strong-leader/";
    const LDR2 = "https://www.imd.org/reflections/leadership-styles/";
    const LDR3 = "https://www.charlestonsouthern.edu/blog/why-is-it-important-to-know-how-to-lead-through-a-crisis/";
    const LDR4 = "https://www.valamis.com/hub/leadership-communication#:~:text=Leadership%20communication%20is%20a%20type,build%20trust%20and%20encourage%20employees";
    const LDR5 = "https://acorn.works/enterprise-learning-management/team-building-leadership";
    const STR1 = "https://studentinvolvement.ufl.edu/student-organizations/create/";
    const STR2 = "https://orgs.studentinvolvement.ufl.edu/Organizations/Start";
    const STR3 = "https://policy.ufl.edu/policy/rso-classification-officer-eligibility/";
    const STR4 = "https://studentinvolvement.ufl.edu/wp-content/uploads/2022/08/SAI-USSO-Policy-2022.pdf";
    const STR5 = "https://studentinvolvement.ufl.edu/wp-content/uploads/2021/09/Student-Org-Resource-Guide-min.pdf";

    useEffect(() => {
        if (localStorage.getItem('LoggedIn') === "false") {                         
            navigate("/")
        }
    }, []);


    return (
        <div>
            <div>
                <img src={PlazaOfTheAmericas} alt="Plaza of the Americas - UF" className="LP-bg-img" />
            </div>

            <div>
                <img src={CenturyTower} alt="Century Tower - UF" className="LP-bg-img2" />
            </div>

            <div>
                <img src={Malachowsky} alt="Malachowsky - UF" className="LP-bg-img3"/>
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

                {/* How to start a club */}
                <div className="IH-section-head-container" style={{marginTop: "0%"}}>
                    <div className="IH-section-head-text">
                        Starting a Student Organization
                    </div>

                    <div className="IH-section-body-container">
                        <div className="IH-section-body-text" onClick={() => {window.open(STR1, "_blank")}}>
                            How to Become a Student Organization
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Creating a student organization is a big process! This page helps to outline some of the beginning steps and has links for further research.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(STR2, "_blank")}}>
                            Requirements for Becoming a Student Organization
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                This web page, created by the University of Florida, details various requirements for creating a student organization.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(STR3, "_blank")}}>
                            Information on General Registered Student Organizations
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                There are two types of student organizations, General Registered Student Organizations and University Sponsored Student Organizations. This page explores the former.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(STR4, "_blank")}}>
                            Information on University Sponsored Student Organizations
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                This page extensively details the University of Florida's relationship with University Sponsored Student Organizations.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(STR5, "_blank")}}>
                            Comprehensive Student Organization Guide
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                This document closely reviews many resources available to student organizations.
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
                        <div className="IH-section-body-text" onClick={() => {window.open(LDR1, "_blank")}}>
                            A Guide to Becoming a Stronger Leader
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                This article dives into the topic of leadership, particularly how leaders are made.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(LDR2, "_blank")}}>
                            Leadership Styles
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Leaders come in many shapes and sizes, this page considers different styles of leadership.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(LDR3, "_blank")}}>
                            Leading in a Crisis
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                True leaders are born in times of crisis, not times of ease. This article discusses leaders in times of crisis.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(LDR4, "_blank")}}>
                            Improving Communication
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                A trait all great leaders have is that of communication. Here, communication is explored.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(LDR5, "_blank")}}>
                            Team Building
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Similar to communication, team building is an important for leaders to facilitate. A leader is nothing without a cohesive team to lead.
                            </div>
                        </div>
                    </div>
                </div>

                {/* DEI */}
                <div className="IH-section-head-container">
                    <div className="IH-section-head-text">
                        Diversity, Equality, and Inclusion
                    </div>

                    <div className="IH-section-body-container">
                        <div className="IH-section-body-text" onClick={() => {window.open(DEI1, "_blank")}}>
                            What is DEI?
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                This article reviews the various facets of diversity, equality, and inclusion.
                            </div>
                        </div>
                        
                        <div className="IH-section-body-text" onClick={() => {window.open(DEI2, "_blank")}}>
                            Implementing DEI
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Implementing diversity, equality, and inclusion initiatives is easier said than done. Here, you can find several tips for doing so.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(DEI3, "_blank")}}>
                            DEI in Universities
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                Here, you can learn how DEI can be advanced in university environments.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(DEI4, "_blank")}}>
                            Refining DEI initiatives
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                DEI initiatives often come from places of good intention, however they do not always have their desired effect. This paper warns against several of these pitfalls.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(DEI5, "_blank")}}>
                            Further DEI Research
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                This article provides further insight into how to refine DEI initiatives.
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
                        <div className="IH-section-body-text" onClick={() => {window.open(FUN1, "_blank")}}>
                            Basic Funding Information
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                This resources provides templates and advice for club funding. It specifically pertains to the 2024 Summer and Fall semesters.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(FUN2, "_blank")}}>
                            Fundraising Ideas
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                This article details various ideas for raising funds for student organizations.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(FUN3, "_blank")}}>
                            Managing Funds
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                A challenge for any student organization is synchronizing budget restraints and club aspirations. This article explores this topic and offers solutions.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(FUN4, "_blank")}}>
                            Getting Sponsors
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                One good source of funding is sponsors. Here, the process of getting and keeping sponsors is discussed.
                            </div>
                        </div>

                        <div className="IH-section-body-text" onClick={() => {window.open(FUN5, "_blank")}}>
                            Receiving Grants
                        </div>
                        <div className="IH-section-subheading-container">
                            <div className="IH-section-subheading-text">
                                In addition to sponsors, grants can be a versatile source of funding. This article reviews that topic.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationHub