// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWlnDwM_3V2h5o3uwIrdAe-BXV0axeDJk",
  authDomain: "login-reg-prc.firebaseapp.com",
  projectId: "login-reg-prc",
  storageBucket: "login-reg-prc.appspot.com",
  messagingSenderId: "545805537227",
  appId: "1:545805537227:web:8f5c658e16ef59d59cf04e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

//   appId: process.env.REACT_APP_appId
