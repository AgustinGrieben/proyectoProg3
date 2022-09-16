import React from "react";
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <nav className="">
            <ul className="main-nav">
                <li><img className='logo'src='/img/logoTurnedUp.png' alt=''/> </li>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/favoritos'> Favoritos </Link></li>
                <li><Link to='/vertodas'> Ver Todas </Link></li>
            </ul>
        </nav>
    )
}

export default Header;