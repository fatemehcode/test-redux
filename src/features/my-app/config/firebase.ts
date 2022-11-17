// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSQTRCQE5kx-i8QaAIFFEzCUbnfz1UxOo",
  authDomain: "react-d8c80.firebaseapp.com",
  projectId: "react-d8c80",
  storageBucket: "react-d8c80.appspot.com",
  messagingSenderId: "638760419724",
  appId: "1:638760419724:web:5691dc6df78dbcbcd556a9",
  measurementId: "G-R2QK3V7Z49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);