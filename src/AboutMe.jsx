import dog from "/hen.PNG";
import games from "/cel_tp.PNG";
import books from "/woods.PNG";

import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {useNavigate} from "react-router-dom";

function AboutMe(){
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

            <h1 className={"flex flex-col justify-center items-center mt-10 mb-5 text-5xl text-green-500 "}>About Me: Beyond Tech (kinda)</h1>
            <h1 className={"border-green-500 border-4 rounded flex flex-row justify-left items-center mt-2 ml-15 text-2xl text-center text-white"}>
            <img className={"h-70 w-55 mr-5"} src={dog} alt="Henry"/>This is my dog Henry, whom I adopted in August of this past year. He’s a husky mix, so he’s very energetic at times, but over time he’s basically an oversized cat who enjoys long naps. He also almost never barks (unless he sees a squirrel or a large truck, for some reason).
            </h1>
            <h1 className={"border-green-500 border-4 rounded flex flex-row justify-left items-center mt-2 ml-15 text-2xl text-center text-white"}>
            <img className={"h-60 w-60 mr-5"} src={books} alt="Nw"/> I try to always be in the middle of reading something. My favorite author right now is Haruki Murakami, and I’ve read many of his works, but Norwegian Wood is by far my favorite. A close second favorite novel is Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin.

            </h1>
            <h1 className={"border-green-500 border-4 rounded flex flex-row justify-left items-center mt-2 ml-15 text-2xl text-center text-white"}>
                <img className={"h-60 w-80 mr-5 pb-5"} src={games} alt="Celeste"/> Games are a huge interest of mine as well, typically 2D platformers or side-scrolling beat ’em ups—really anything with a more retro feel to its game design. Celeste is probably my all-time favorite, closely followed by anything Pokémon-related (especially Emerald).
            </h1>

    </div>
    )
}

export default AboutMe