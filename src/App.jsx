import py_logo from "/python.png";
import java from "/java.png";
import git from "/github.png";
import {useNavigate} from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function App() {
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
       <h1 className={"text-5xl sm:text-6xl lg:text-7xl text-center mt-20"}>Rodney Brown</h1>

       <p className={"text-4xl sm:text-xl lg:text-3xl text-white mt-12 text-center max-w-7xl mx-auto"}>
          Hi my name is Rodney Brown, I'm a computer science student at gvsu
           I'm currently looking to use my skills in more practical ways to learn
           and expand my experience by building useful software.
       </p>
       <h2 className={"flex flex-col sm:flex-row justify-center items-center gap-6 mt-5"}>
       <img className={"w-50 sm:w-60 lg:w-75"} src={py_logo} alt="Rodney Brown"/>
           <img className={"w-50 sm:w-60 lg:w-75"} src={java} alt="Rodney Brown"/>
           <img className={"w-50 sm:w-60 lg:w-75"} src={git} alt="Rodney Brown"/>


       </h2>




   </div>
  )
}

export default App
