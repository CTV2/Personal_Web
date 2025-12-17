import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx"

const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/about', element: <AboutMe />},
    {path: '/projects', element: <Projects />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router = {router}/>
  </StrictMode>,
)

