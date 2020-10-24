import React from 'react'
import {useDispatch} from 'react-redux'
import {authActions} from '../../actions'

function NavbarLogged() {

    let dispatch = useDispatch();

    function logout() {
        dispatch(authActions.logout());
    }

    return (
            <React.Fragment>
                 <li style={{
                     cursor: "pointer"
                 }} onClick={logout} className="zalogujburger">   <a className="nav-link">Wyloguj</a></li>
            </React.Fragment>
    )
}

export default NavbarLogged;