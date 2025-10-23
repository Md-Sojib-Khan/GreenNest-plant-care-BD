// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMVCt2MCpjWK5Tve4D9XEHb1Z06yPC3G0",
  authDomain: "greennest-plant-care-bd.firebaseapp.com",
  projectId: "greennest-plant-care-bd",
  storageBucket: "greennest-plant-care-bd.firebasestorage.app",
  messagingSenderId: "195203394357",
  appId: "1:195203394357:web:ee8667cd3ca0fef2673a7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);