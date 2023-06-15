// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcMtDeD2TveJhI-3gkLia8ATn6rBo9GEs",
  authDomain: "doctors-portal-client-ec324.firebaseapp.com",
  projectId: "doctors-portal-client-ec324",
  storageBucket: "doctors-portal-client-ec324.appspot.com",
  messagingSenderId: "20460184425",
  appId: "1:20460184425:web:02b719983c4eafc09113f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;