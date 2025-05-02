import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "knowfinity-3f9be.firebaseapp.com",
  projectId: "knowfinity-3f9be",
  storageBucket: "knowfinity-3f9be.firebasestorage.app",
  messagingSenderId: "165567162847",
  appId: "1:165567162847:web:5464a31b5e2c64f1c8fc6a",
  measurementId: "G-2L8BKPB595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);