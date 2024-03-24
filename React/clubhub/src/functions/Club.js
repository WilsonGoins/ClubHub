import { firestore } from '../firebase';
import * as fs from "firebase/firestore";

const createClub = async () => {
    try {
        const clubsRef = fs.collection(firestore, "clubs");
        const newUser = await fs.addDoc(clubsRef, {
            name: "test",
            bio: "testing",
            members: [] // refers to collection, use {} for document
        })
    } catch (error) {
        console.error("Unexpected error in createClub: ", error);
    }
}

const findClub = async (targetName) => { // returns document itself
    try {
        const clubsRef = fs.collection(firestore, "clubs");
        const q = fs.query(clubsRef, fs.where("name", "==", targetName))

        const snapshot = await fs.getDocs(q);

        if (snapshot.empty) {
            throw new Error("Club not found!");
        }

        return snapshot.docs[0]; // returning first item of array
    } catch (error) {
        console.error("Unexpected error in findClub: ", error);
    }
}

const editClubName = async (targetName, newName) => { // edits club name directly
    try {
        const clubID = await findClub(targetName)
        const club = fs.doc(firestore, "clubs", clubID.id);
        await fs.updateDoc(club, { name: newName });
    } catch (error) {
        console.error("Unexpected error in editClubName: ", error);
    }
}

export { createClub, findClub, editClubName };