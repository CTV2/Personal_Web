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
           <DropdownMenuTrigger className={"absolute top-0 right-2 size-16 right"}>Menu</DropdownMenuTrigger>
           <DropdownMenuContent>
               <DropdownMenuLabel className={"underline"}>Options</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuItem onClick={() => navigate("/")}>Home</DropdownMenuItem>
               <DropdownMenuItem onClick={() => navigate("/about")}>About Me</DropdownMenuItem>
               <DropdownMenuItem onClick={() => navigate("/projects")}>Projects</DropdownMenuItem>
               <DropdownMenuItem onClick={() => navigate("/contact")}>Contact</DropdownMenuItem>
           </DropdownMenuContent>
       </DropdownMenu>
       <h1 className={"text-7xl flex flex-col  justify-center items-center mt-5"}>Rodney Brown</h1>

       <p className={"text-3xl text-white mt-12 text-center pb-15"}>
          Hi my name is Rodney Brown, I'm a computer science student at gvsu<br/>
           I'm currently looking to use my skills in more practical ways to learn<br/>
           and expand my experience by building real software.
       </p>
       <h2 className={"flex flex-row  justify-center items-center mt-5 space-between"}>
       <img className={"size-90 pt-2 mr-20"} src={py_logo} alt="Rodney Brown"/>
           <img className={"h-90 w-50 pt-2 mr-20"} src={java} alt="Rodney Brown"/>
           <img className={"size-90 pt-2"} src={git} alt="Rodney Brown"/>


       </h2>




   </div>
  )
}

export default App
