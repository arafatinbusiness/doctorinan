// Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYAgWBpw0eM9R0mJlP-6C_d9PN98ZlMlI",
  authDomain: "doctorinan.firebaseapp.com",
  projectId: "doctorinan",
  storageBucket: "doctorinan.firebasestorage.app",
  messagingSenderId: "490774658788",
  appId: "1:490774658788:web:5c920988e08b09bafaf6f1",
  measurementId: "G-460BBQVRFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
