

import React from 'react'
import { Link } from 'react-router-dom'

import {useDispatch} from 'react-redux'
import { authActions } from '../../actions';

 function LoggedButton() {

    const dispatch = useDispatch();

    function logout() {
        dispatch(authActions.logout());
    }
   
    return (
        <div>
             <a onClick={logout} className="logowanie-przycisk">
      <Link className="is-white" to="/login">
      <h5 className="is-white">Wyloguj się</h5></Link>
        </a>
        </div>
    )
}


export default LoggedButton;