// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Analytics optional hai
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZL4YJn9vgK6H12iw2fVe2I5qFwNlzbYs",
  authDomain: "save-money-65a95.firebaseapp.com",
  projectId: "save-money-65a95",
  storageBucket: "save-money-65a95.firebasestorage.app",
  messagingSenderId: "515830509895",
  appId: "1:515830509895:web:d097b678f0f9007b321c62",
  measurementId: "G-VLXXN6PPSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Authentication
export const auth = getAuth(app);

// ✅ Google Provider
export const provider = new GoogleAuthProvider();

// ❌ Analytics ko abhi hata do (zarurat nahi hai)