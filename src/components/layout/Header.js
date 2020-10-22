import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import LoginButton from '../auth/LoginButton';
import LoggedButton from '../auth/LoggedButton';
import PropTypes from 'prop-types';

function Header() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const loggedIn = useSelector((state) => state.authentication.loggedIn);
    const user = useSelector((state) => state.authentication.user);


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
                    <li className="zalogujburger"><a className="nav-link"><Link className="is-white" to="/login">Zaloguj</Link></a></li>
                    <li><a className="nav-link"><Link className="is-white" to="/faq">FAQ</Link></a></li>
                    <li><a className="nav-link"><Link className="is-white" to="/profile">Profil</Link></a></li>
            </div>
                <div  className="burger" onClick={toggleNavbar}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
        </nav>
        {loggedIn ? <LoggedButton /> : <LoginButton />}
    </header>
    );
}

Header.propTypes = {
    loggedIn: PropTypes.bool,
    user: PropTypes.object
}

export default Header
