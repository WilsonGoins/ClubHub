import { firestore } from '../firebase';
import * as fs from "firebase/firestore";

const initializeBoard = async (title, bio) => {
    try {
        const boardsRef = fs.collection(firestore, "forumBoards");
        await fs.addDoc(boardsRef, {
            title: title,
            bio: bio,
            numPosts: 0,
            forumPosts: []
        })
    } catch (error) {
        console.error("Unexpected error in initializeBoard: ", error);
    }
}

export { initializeBoard };