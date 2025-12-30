import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {useNavigate} from "react-router-dom";
import { Input } from "@/components/ui/input.tsx"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

function Profile() {
    const navigate = useNavigate();
    function login() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('Logging In')
                navigate("/Admin_log")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                alert(errorCode)
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }
    return (
        <div className="min-h-screen bg-black text-green-500 font-bold flex flex-col justify-center items-center px-6 ">
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

            <h1 className={'text-4xl sm:text-xl lg:text-7xl text-green-500 text-center mb-6 max-w-xl mx-auto'}>Admin Login</h1>

            <Input id="email" className={"w-75"} type="email" placeholder="Email" />
            <Input id="password" className={"w-75 m-6"} type="password" placeholder="Password" />
            <button onClick={login} className={"m-6 w-40 h-10 border border-white rounded hover:bg-sky-400"}>Submit</button>

        </div>
    )
}

export default Profile