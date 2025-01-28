import {Link, useLocation} from 'react-router-dom'
import './Navigation.css'
  

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
        <Link className={isActive('/')} to="/"><i className="fa-solid fa-house"></i></Link>
        <Link className={isActive('/projects')} to="/projects"><i className="fa-solid fa-hammer"></i></Link>
        <Link className={isActive('/other')} to="/other">???</Link>
      </div>
    </>
  )
}

export default Navigation
