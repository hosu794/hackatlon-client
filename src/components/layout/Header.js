import React, {useState} from 'react'

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
            <a href="index.html">
                <h1>HABITER</h1>
            </a>
        </div>
        <nav className="navbar">
            <div className={active ? "nav-links nav-active" : "nav-links"}>
                    <li className="zalogujburger"><a className="nav-link" href="#">Zaloguj</a></li>
                    <li><a className="nav-link" href="ranking.html">Ranking</a></li>
                    <li><a className="nav-link" href="FAQ.html">FAQ</a></li>
                    <li><a className="nav-link" href="Profil.html">Profil</a></li>
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
