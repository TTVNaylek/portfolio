import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './components/Home.tsx'
import Footer from "./components/Footer.tsx";
import Version from "./components/Version.tsx"


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
        <Footer/>
        <Version version='v0.1'/>
    </StrictMode>,
)
