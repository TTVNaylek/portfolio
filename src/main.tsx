import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './components/Home.tsx'
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Home/>
        <Footer/>
    </StrictMode>,
)
