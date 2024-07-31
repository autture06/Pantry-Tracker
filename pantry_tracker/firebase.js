// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmj-bQ_XIn55DFql9hHxJhBRQvdJQZAm8",
  authDomain: "pantry-app-9db57.firebaseapp.com",
  projectId: "pantry-app-9db57",
  storageBucket: "pantry-app-9db57.appspot.com",
  messagingSenderId: "796944725164",
  appId: "1:796944725164:web:b6546d5509d8a2a874db09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export {app, firestore}