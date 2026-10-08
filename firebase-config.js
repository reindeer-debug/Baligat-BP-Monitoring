// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSv5N8ipd-0O4ou1ofekRlF7Qku_2s0M0",
  authDomain: "community-bp-monitoring.firebaseapp.com",
  projectId: "community-bp-monitoring",
  storageBucket: "community-bp-monitoring.firebasestorage.app",
  messagingSenderId: "921978601390",
  appId: "1:921978601390:web:878a0ad0c988788a8cd23f",
  measurementId: "G-GJ0SHEDNEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);