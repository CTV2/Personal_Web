import go from "/go.png";
import plane from "/fly.png";

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
        <div className="min-h-screen bg-black text-green-500 font-bold flex flex-col px-6">
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

            <h1 className={"flex flex-col justify-center items-center mt-15 text-7xl text-green-500"}>Projects

            </h1>
            <h1 className={"border-green-500 text-2xl sm:text-5xl lg:text-4.5xl border-4 rounded-4xl flex flex-col sm:flex-row justify-center items-center mb-5 mt-5 text-white text-center"}>
                <img className={"h-80 w-100 mr-5"} src={go} alt="Go Board"/> Go Game: <br/> Created a program that mimics the game of go and used recursion to keep score and keep track of board state to undo moves and assess win conditions.
            </h1>
            <h1 className={"border-green-500 text-2xl sm:text-4xl lg:text-5xl border-4 rounded-4xl flex flex-col sm:flex-row justify-center items-center mb-5 mt-5 text-white text-center"}>
                <img className={"h-75 w-100 mr-5 "} src={plane} alt="Go Board"/> Plane Trip Simulation: <br/> Created a program that keeps track of planes gas and required gas to reach a destinations, it also kept track of when planes would need to refuel and receive maintenance
            </h1>
        </div>
    )
}


export default Projects;