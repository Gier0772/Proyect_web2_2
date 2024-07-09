// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfzfciF8f5w3M0Z5oZ77QY6gNhf3RpYBc",
  authDomain: "web-firabase.firebaseapp.com",
  databaseURL: "https://web-firabase-default-rtdb.firebaseio.com",
  projectId: "web-firabase",
  storageBucket: "web-firabase.appspot.com",
  messagingSenderId: "1005404899220",
  appId: "1:1005404899220:web:79ae668bf2d2d554ab7181"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;