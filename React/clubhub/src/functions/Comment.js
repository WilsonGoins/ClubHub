import { firestore } from '../firebase';
import * as fs from "firebase/firestore";

const initializeComment = async (postID, author, date, text) => {
    try {
        const commentsRef = fs.collection(firestore, "comments");
        await fs.addDoc(commentsRef, {
            postID: postID,
            author: author,
            date: date,
            text: text,
            likes: 0
        })
    } catch (error) {
        console.error("Unexpected error in initializeComment: ", error);
    }
}

export { initializeComment };