import {useLocation} from 'react-router-dom'
import '../styles/Navigation.css'
  

function Navigation() {
    // Récupère la localisation du user
    const userLocation = useLocation();

     // Fonction pour déterminer si le lien est actif
    const isActive = (path : string) => {
        return userLocation.pathname === path ? 'navActive' : '';
    };

  return (
    <>
      <div className='navContainer'>
        <a className={isActive('/')} href="#"><i className="fa-solid fa-house"></i></a>
        <a className={isActive('/projects')} href="#"><i className="fa-solid fa-hammer"></i></a>
        <a className={isActive('/other')} href="#">???</a>
      </div>
    </>
  )
}

export default Navigation
