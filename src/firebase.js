// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkwVhv6iC030lJHa92jHWALKhwfkuRXoM",
  authDomain: "learn-firebase-53453.firebaseapp.com",
  projectId: "learn-firebase-53453",
  storageBucket: "learn-firebase-53453.appspot.com",
  messagingSenderId: "769103580070",
  appId: "1:769103580070:web:0557b381d25dff95939d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db