import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwyePaWjG7zckR6ht5ApWWa_ztdAHjyBc",
    authDomain: "auth-7dfa5.firebaseapp.com",
    projectId: "auth-7dfa5",
    storageBucket: "auth-7dfa5.appspot.com",
    messagingSenderId: "704025734300",
    appId: "1:704025734300:web:d95aaf8f66397e614dd159",
    measurementId: "G-G1HECGECX0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };