// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSQmLIliaOUELZTVP-URCFdJ3UQKHxMr8",
  authDomain: "email-password-logine.firebaseapp.com",
  projectId: "email-password-logine",
  storageBucket: "email-password-logine.appspot.com",
  messagingSenderId: "674508849826",
  appId: "1:674508849826:web:088ca4d212d383eb0e0dfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app