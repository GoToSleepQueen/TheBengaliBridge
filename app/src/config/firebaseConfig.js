// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8R7Rk5QGPn5g_5XI-a9sx-oDXoTft8Zs",
  authDomain: "thebengalibridge.firebaseapp.com",
  projectId: "thebengalibridge",
  storageBucket: "thebengalibridge.firebasestorage.app",
  messagingSenderId: "1090523278216",
  appId: "1:1090523278216:web:34a9a575dd1e592f3b283d",
  measurementId: "G-6P7FP4Z98D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);