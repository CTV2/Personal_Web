import xer from '/716.png'
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
       <h1 className={"text-7xl"}>Rodney Brown</h1>

       <p className={"text-2xl text-green-500 mt-12 text-center"}>
          Hi my name is Rodney Brown, I'm a computer science student at gvsu<br/>
           I'm currently looking to use my skills in more practical ways to learn<br/>
           and expand my experience by building real software.
       </p>
       <img src={xer} alt="Rodney Brown"/>


   </div>
  )
}

export default App
