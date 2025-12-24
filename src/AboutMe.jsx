import dog from "/dog.jpg";
import games from "/cel.jpg";
import books from "/books.jpg";

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
        <div className="min-h-screen bg-black text-white font-bold flex flex-col px-6">
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

            <h1 className={"flex flex-col justify-center items-center mt-15 text-5xl underline"}>About Me: Beyond Tech(kinda)</h1>
            <h1 className={"flex flex-row justify-left items-center mt-5 ml-15 text-2xl text-center"}>
            <img className={"h-70 w-55 mr-5"} src={dog} alt="Henry"/>This is my Dog Henry whom I adopted inn august of this past year,he's a husky mix so he's very energetic at time but overtimes hes basically and oversized cat who enjoys long naps.He also almost never barks (unless he sees a squirrel or large truck for some reason?)
            </h1>
            <h1 className={"flex flex-row justify-left items-center mt-5 ml-15 text-2xl text-center"}>
            <img className={"h-75 w-60 mr-5"} src={books} alt="Nw"/> I try to always be in the middle of reading something, my favorite author is Haruki Murakami and I've read a lot of his works but Norwegian Wood is by far my favorite. A close second favorite Novel is Tomorrow and Tomorrow and Tomorrow by Gabrielle Zevin

            </h1>
            <h1 className={"flex flex-row justify-left items-center mt-5 ml-15 text-2xl text-center"}>
                <img className={"h-60 w-80 mr-5 pb-5"} src={games} alt="Celeste"/> Games are a huge interest of mine too, typically 2D platformers or side scrolling beat'em ups. Really anything with a more retro feel to it's game design. Celeste is probably my all time favorite, closely followed by anything to do with pokemon (especially Emerald).
            </h1>

    </div>
    )
}

export default AboutMe