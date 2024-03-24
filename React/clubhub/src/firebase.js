import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCotaEkyqbdlmv9Vm27M2G9QireZzHNlwU",
    authDomain: "clubhub2-7bbe1.firebaseapp.com",
    projectId: "clubhub2-7bbe1",
    storageBucket: "clubhub2-7bbe1.appspot.com",
    messagingSenderId: "514701562919",
    appId: "1:514701562919:web:1338d3e53e9a214f1a6a02"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const firestore = getFirestore(app);

export const usersCollection = collection(firestore, "users");

export default app