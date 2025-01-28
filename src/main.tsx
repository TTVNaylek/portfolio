import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import Footer from "./components/Footer/Footer.tsx";
import Version from "./components/Version/Version.tsx"


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
        </BrowserRouter>
        <Footer/>
        <Version version='v0.1'/>
    </StrictMode>,
)
