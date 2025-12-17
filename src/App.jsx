import xer from '/716.png'
import './App.css'

function App() {

  return (
   <div className="min-h-screen bg-black text-white font-bold flex flex-col justify-center items-center px-6">
       <h1 className={"text-7xl"}>Rodney Brown</h1>

       <p className={"text-2xl text-green-500 mt-12 text-center"}>
          Hello my name is Rodney Brown, I'm a computer science student at gvsu<br/>
           I'm currently looking to use my skills in more practical ways to learn<br/>
           and expand my experience by building real software.
       </p>
       <img src={xer} alt="Rodney Brown"/>


   </div>
  )
}

export default App
