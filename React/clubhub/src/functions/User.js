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

    // try {
    //     const clubsRef = fs.collection(firestore, "clubs");
    //     const q = fs.query(clubsRef, fs.where("name", "==", targetName))

    //     const snapshot = await fs.getDocs(q);

    //     if (snapshot.empty) {
    //         throw new Error("Club not found!");
    //     }

    //     return snapshot.docs[0]; // returning first item of array
    // } catch (error) {
    //     console.error("Unexpected error in findClub: ", error);
    // }
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

export { initializeUserProfile, retrieveUserProfile, retrieveUserData }