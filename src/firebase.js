// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIhQUZKvQDIOjPFbcY9qWdcTbjqaTssz4",
  authDomain: "fitway-91c99.firebaseapp.com",
  projectId: "fitway-91c99",
  storageBucket: "fitway-91c99.appspot.com",
  messagingSenderId: "614917388616",
  appId: "1:614917388616:web:1d12503a79dc75e90edb7d",
  measurementId: "G-CFZ1C4C2VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage, db };
