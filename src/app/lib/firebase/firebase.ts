import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDToLat9Zbir81RyIaMGWXW4os30FkGwmk",
    authDomain: "jiltd-aa8b6.firebaseapp.com",
    projectId: "jiltd-aa8b6",
    storageBucket: "jiltd-aa8b6.appspot.com",
    messagingSenderId: "894393847134",
    appId: "1:894393847134:web:3dcd7d96f43c93bce213cf",
    measurementId: "G-KZYMT633MS"
  };

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { app, auth };