import React, { useState, useEffect } from "react";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { createClub, findClub, editClubName } from "../functions/Club";
import { initializeBoard } from "../functions/ForumBoard";
import { initializeComment } from "../functions/Comment";
import { initializePost } from "../functions/Post";
import { initializeUserProfile, retrieveUserProfile, retrieveUserData } from "../functions/User";

const Test = () => { // dummy template to test functions with firebase
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const usersRef = collection(firestore, "users");

            try {
                await setDoc(doc(usersRef, "SF"), {
                    name: "San Francisco",
                    state: "CA",
                    country: "USA",
                    capital: false,
                    population: 860000,
                    regions: ["west_coast", "norcal"]
                });
                await setDoc(doc(usersRef, "LA"), {
                    name: "Los Angeles",
                    state: "CA",
                    country: "USA",
                    capital: false,
                    population: 3900000,
                    regions: ["west_coast", "socal"]
                });
                // Add other setDoc calls as needed...

                const docRef = doc(firestore, "users", "SF");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                } else {
                    console.log("No such document!");
                }

                setDataLoaded(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once

    if (!dataLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Render your component with the fetched data */}
            <p>User data: {JSON.stringify(dataLoaded)}</p>
        </div>
    );
};

const TestClub = () => {
    const [clubLoaded, setClub] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const clubsRef = collection(firestore, "clubs");

            try {
                createClub();
                editClubName("test", "testfound");
            } catch (error) {
                console.error("Caught unexpected error: ", error);
            }
        };
        console.log("Data will be fetched.");
        fetchData();
        console.log("Data fetched.");
    }, []);

    if (!clubLoaded) {
        return <div>Operation processing...</div>
    }

    return (
        <p>Check database!</p>
    )
}

const TestFuncs = () => {
    const [loaded, set] = useState(false);

    useEffect(() => {
        console.log("Running stuff...");
        const fetchData = async () => {
            console.log("Checking date...");
            const currDate = new Date();
            console.log("Checked date.");
            initializeBoard("test tile", "dummy board for dummy people");
            initializePost("john doe", "DOSC", currDate, "I am going insane", "Crazy?"); // author, club, date, text, title
            initializeComment("heehee", "joey", currDate, "this is gas") // postID, author, date, text, likes
        }

        fetchData();
    }, []);

    if (!loaded) {
        return <p>Running functions...</p>
    }

    return (
        <p>Functions done!</p>
    )
}

const TestUsers = () => {
    const [loaded, set] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            //initializeUserProfile("wordle", "heepheep");
            const data = await retrieveUserProfile("dummy@ufl.edu");
            console.log(data.name);
            set(true);
        }
        fetchData();
    }, []);

    if (!loaded) {
        return <p>Running...</p>
    }

    return (
        <p>User data: {JSON.stringify(loaded.name)}</p>
    )
}

export default TestUsers;