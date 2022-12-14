import React from "react";
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <nav className="">
            <ul className="main-nav">
                <li><img className='logo'src='/img/logoTurnedUp.png' alt=''/> </li>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/Favorites'> Favoritos </Link></li>
                <li><Link to='/cancionesPopulares'> Canciones populares </Link></li>
                <li><Link to='/albumesPopulares'> Albumes populares </Link></li>
            </ul>
        </nav>
    )
}

export default Header;