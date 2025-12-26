import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {useNavigate} from "react-router-dom";
import { Input } from "@/components/ui/input"
import {collection, addDoc} from "firebase/firestore";
import {db} from "./main.jsx"

async function submit() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let msg = document.getElementById("msg").value;

    try {
        const docRef = await addDoc(collection(db, "User_Data"), {
            Email: email,
            Name: name,
            Msg: msg
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Form Submitted!");
        location.reload();
    } catch (e) {
        alert("An error occurred.");
        console.error("Error adding document: ", e);
    }
}
function Contact() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-black text-green-500 font-bold flex flex-col justify-center items-center px-6 ">
            <DropdownMenu>
                <DropdownMenuTrigger className={"absolute top-0 right-2 size-16 right"}>Menu</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/")}>Home</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/about")}>About Me</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/projects")}>Projects</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/contact")}>Contact</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <h1 className={'pb-6 text-7xl'}>Contact Me</h1>

            <Input id="email" className={"w-75"} type="email" placeholder="Email" />
            <Input id="name" className={"w-75 m-6"} type="Name" placeholder="Name" />
            <Input id="msg" className={"w-75 h-20"} type="" placeholder="Inquiry" />
            <button onClick={submit} className={"m-6 w-40 h-10 border border-white rounded hover:bg-sky-400"}>Submit</button>

        </div>
    )
}

export default Contact