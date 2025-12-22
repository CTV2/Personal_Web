import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {useNavigate} from "react-router-dom";


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

function Projects(){
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-black text-white font-bold flex flex-col justify-center items-center px-6">
            <DropdownMenu>
                <DropdownMenuTrigger className={"absolute top-0 right-2 size-16 right"}>Menu</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/")}>Home</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/about")}>About Me</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/projects")}>Projects</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <h1>Projects</h1>


        </div>
    )
}


export default Projects;