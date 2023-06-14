// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyChvmHGtqyDnFaa_MBB81GmnTS8V3nbFuQ",
  authDomain:"visitrack-a8252.firebaseapp.com",
  projectId: "visitrack-a8252",
  storageBucket:"visitrack-a8252.appspot.com",
  messagingSenderId:"773430347476",
  appId:"1:773430347476:web:8b97a06c488306ede3dd41",
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {app, firestore, auth, storage};
