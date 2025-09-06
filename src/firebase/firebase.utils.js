// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config
const config = {
  apiKey: "AIzaSyDm10KFVXM-PhWODQKuVFzRs7ltIXfnxLE",
  authDomain: "crwn-db-e14c6.firebaseapp.com",
  projectId: "crwn-db-e14c6",
  storageBucket: "crwn-db-e14c6.firebasestorage.app",
  messagingSenderId: "816438933380",
  appId: "1:816438933380:web:f3e6a3b20675af3e760fd1",
};

// Initialize Firebase
const app = initializeApp(config);

// Services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Google Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
