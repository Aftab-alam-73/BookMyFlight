// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "notification-b6b5d.firebaseapp.com",
  projectId: "notification-b6b5d",
  storageBucket: "notification-b6b5d.appspot.com",
  messagingSenderId: "302879837880",
  appId:process.env.NEXT_PUBLIC_APP_ID,
  measurementId: "G-40DEM535T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging=getMessaging(app);
export {messaging};