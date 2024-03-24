import { firestore } from '../firebase';
import * as fs from "firebase/firestore";

const initializeUserProfile = async (name, email) => {
    try {
        const usersRef = fs.collection(firestore, "users");
        await fs.addDoc(usersRef, {
            name: name,
            email: email,
            clubs: []
        })
    } catch (error) {
        console.error("Unexpected error in initializeUserProfile: ", error);
    }
}

const retrieveUserProfile = async (targetEmail) => {
    try {
        const usersRef = fs.collection(firestore, "users");
        const q = fs.query(usersRef, fs.where("email", "==", targetEmail));

        const snapshot = await fs.getDocs(q);

        if (snapshot.empty) {
            throw new Error("User not found!");
        }
        
        const data = await snapshot.docs[0].data();
        return data;
    } catch (error) {
        console.error("Unexpected error in retrieveUserProfile: ", error);
        throw new Error("Failed retrieval.");
    }
}

const retrieveUserData = async (targetEmail) => {
    try {
        const userProfile = await retrieveUserProfile(targetEmail);
        const profileRef = fs.doc(firestore, "users", userProfile.id);
        const profileSnapshot = await fs.getDoc(profileRef);

        if (profileSnapshot.exists()) {
            return profileSnapshot.getData();
        } else {
            throw new Error("User not found.");
        }
    } catch (error) {
        console.error("Error occurred while retrieving user data: ", error);
        throw error; // Re-throw the error for upper-level handling
    }
};

const addClubHelper = async (targetEmail) => {
    try {
        const usersRef = fs.collection(firestore, "users");
        const q = fs.query(usersRef, fs.where("email", "==", targetEmail));

        const snapshot = await fs.getDocs(q);

        if (snapshot.empty) {
            throw new Error("User not found!");
        }
        
        return snapshot.docs[0];
    } catch (error) {
        console.error("Unexpected error in retrieveUserProfile: ", error);
        throw new Error("Failed retrieval.");
    }
}

const addClub = async (userEmail, addedClub) => {
    try {
        const userData = await retrieveUserProfile(userEmail);
        const otherUserData = await addClubHelper(userEmail);
        const clubName = addedClub.data().name;
        userData.clubs.push(clubName);

        const userDocRef = fs.doc(firestore, "users", otherUserData.id);

        console.log("cook???");

        await fs.updateDoc(userDocRef, { clubs: userData.clubs });
        
    } catch (error) {
        console.error("Error encountered in addClub: ", error);
    }
}

export { initializeUserProfile, retrieveUserProfile, retrieveUserData, addClub }