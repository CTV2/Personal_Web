import {useNavigate} from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function log() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-green-500 font-bold flex flex-col px-6">

            <DropdownMenu>
                <DropdownMenuTrigger className={"absolute top-0 right-2 size-16 right"}>Menu</DropdownMenuTrigger>
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
            <h1 className={"text-7xl flex flex-col  justify-center items-center mt-5"}>Logs:</h1>
        </div>
    )
}

export default log
