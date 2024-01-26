// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-d5d45.firebaseapp.com",
  projectId: "blog-d5d45",
  storageBucket: "blog-d5d45.appspot.com",
  messagingSenderId: "235916386667",
  appId: "1:235916386667:web:85da38014ea77a02606c2e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
