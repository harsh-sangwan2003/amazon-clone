// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLaqSFCjFdUKzEReyYhF6ukEp7mY9BrcI",
    authDomain: "clone-14871.firebaseapp.com",
    projectId: "clone-14871",
    storageBucket: "clone-14871.appspot.com",
    messagingSenderId: "871513153945",
    appId: "1:871513153945:web:e08ad56e70a453e18d7308",
    measurementId: "G-C56TLJ9B0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);