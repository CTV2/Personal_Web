import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7AN6mnlIDiUdIHB6mXaN4WWtrgusV04Q",
    authDomain: "personal-website-28c3a.firebaseapp.com",
    projectId: "personal-website-28c3a",
    storageBucket: "personal-website-28c3a.firebasestorage.app",
    messagingSenderId: "915611759396",
    appId: "1:915611759396:web:9660e6d81b554b6d34b9b1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
