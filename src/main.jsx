import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx"
import Contact from "./Contact.jsx"
import Profile from "./Admin.jsx";
const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/about', element: <AboutMe />},
    {path: '/profile', element: <Profile />},
    {path: '/projects', element: <Projects />},
    {path: '/contact', element: <Contact />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router = {router}/>
  </StrictMode>,
)
