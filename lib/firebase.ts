import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBwC4GWjPJdyNUTmIwlFu1j9eE8VATVXkY",
    authDomain: "portfolio-website-4d3e8.firebaseapp.com",
    projectId: "portfolio-website-4d3e8",
    storageBucket: "portfolio-website-4d3e8.appspot.com",
    messagingSenderId: "103647854462",
    appId: "1:103647854462:web:d4f3fb26e44bd25776bd2f",
    measurementId: "G-H3D7QJ73VK",
  // apiKey: "AIzaSyB2YNCOz4H3PTSA5BZfbsA2Rhu4a0ZbQz0",
  // authDomain: "konga-shopping.firebaseapp.com",
  // databaseURL: "https://konga-shopping.firebaseio.com",
  // projectId: "konga-shopping",
  // storageBucket: "konga-shopping.appspot.com",
  // messagingSenderId: "62947042887",
  // appId: "1:62947042887:web:98a4deaca02da59e663362",
  // measurementId: "G-JETP0NGX3B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);