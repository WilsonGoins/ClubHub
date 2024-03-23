import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app'


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAlQgBtK9h8RUnJYXUMY5J6ul71TS8xLw",
    authDomain: "clubhub-a7820.firebaseapp.com",
    projectId: "clubhub-a7820",
    storageBucket: "clubhub-a7820.appspot.com",
    messagingSenderId: "775204573412",
    appId: "1:775204573412:web:bfaceb518cbf728d82dcf1",
    measurementId: "G-D041YSTGDH"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app