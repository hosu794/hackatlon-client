import React from 'react'
import { Link } from 'react-router-dom';

function NavbarLogin() {

    return (
            <React.Fragment>
                 <li className="zalogujburger">   <a className="nav-link"><Link className="is-white" to="/login">Zaloguj</Link></a></li>
            </React.Fragment>
    )
}

export default NavbarLogin;