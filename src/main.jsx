import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx"
//Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7AN6mnlIDiUdIHB6mXaN4WWtrgusV04Q",
    authDomain: "personal-website-28c3a.firebaseapp.com",
    projectId: "personal-website-28c3a",
    storageBucket: "personal-website-28c3a.firebasestorage.app",
    messagingSenderId: "915611759396",
    appId: "1:915611759396:web:9660e6d81b554b6d34b9b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/about', element: <AboutMe />},
    {path: '/projects', element: <Projects />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router = {router}/>
  </StrictMode>,
)

