// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMJ2cXlkzJdp5rU_CnbA--OzbH9LEeUuo",
  authDomain: "netfilxgpt-477d7.firebaseapp.com",
  projectId: "netfilxgpt-477d7",
  storageBucket: "netfilxgpt-477d7.appspot.com",
  messagingSenderId: "214463606133",
  appId: "1:214463606133:web:9394b5882f6e6f7351b73c",
  measurementId: "G-TND0GTLFZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();