// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMjCiVsQfJBOhWC8ox-08lsg2Ii1Uc5WA",
  authDomain: "netflix-gpt-8613a.firebaseapp.com",
  projectId: "netflix-gpt-8613a",
  storageBucket: "netflix-gpt-8613a.appspot.com",
  messagingSenderId: "740695793323",
  appId: "1:740695793323:web:02c5c1c8a70797a96861ee",
  measurementId: "G-CVR8ZG72L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();