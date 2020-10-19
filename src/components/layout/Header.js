import React, {useState} from 'react'

import {Link} from 'react-router-dom'

function Header() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const [active, setActive] = useState(false);
    
    function toggleNavbar() {
        setActive(!active);
    }
    return (
        <header>
        <div className="logo-napis">
            <a>
                <Link to="/">
                <h1>HABITER</h1>
                </Link>
               
            </a>
        </div>
        <nav className="navbar">
            <div className={active ? "nav-links nav-active" : "nav-links"}>
                    <li className="zalogujburger"><a className="nav-link" href="#">Zaloguj</a></li>
                    <li><a className="nav-link"><Link className="is-white" to="/rank">Ranking</Link></a></li>
                    <li><a className="nav-link"><Link className="is-white" to="/faq">FAQ</Link></a></li>
                    <li><a className="nav-link"><Link className="is-white" to="/profile">Profil</Link></a></li>
            </div>
                <div  className="burger" onClick={toggleNavbar}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
        </nav>
        <a className="logowanie-przycisk" href="">
            <h5>Zaloguj się</h5>
        </a>
    </header>
    );
}

export default Header
