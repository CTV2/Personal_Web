import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {useNavigate} from "react-router-dom";


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
                    <DropdownMenuItem onClick={() => navigate("/contact")}>Contact</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <h1>Projects</h1>


        </div>
    )
}


export default Projects;