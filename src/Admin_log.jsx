import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {useNavigate} from "react-router-dom";
function Log() {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const Scrape = async () => {
            const querySnapshot = await getDocs(collection(db, "User_Data"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(data);
        };

        Scrape();
    }, []);

    return (
        <div className="min-h-screen bg-black text-green-500 font-bold flex flex-col justify-center items-center px-6">
            <DropdownMenu>
                <DropdownMenuTrigger className={"absolute top-4 right-4 text-base sm:text-lg"}>Menu</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className={"underline"}>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/")}>Home</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/profile")}>Admin</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/about")}>About Me</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/projects")}>Projects</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/contact")}>Contact</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <h1 className="text-4xl font-bold mb-4 mt-4">Contact Form Responses:</h1>

            <div>
                {messages.map(msg => (
                    <div className ={"border-2 border-amber-600 p-5 rounded text-green-500 mt-4 mb-4"}>
                        <p><strong>Name:</strong> {msg.Name}</p>
                        <p><strong>Email:</strong> {msg.Email}</p>
                        <p><strong>Message:</strong> {msg.Msg}</p>
                        <p>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Log