

import React from 'react'
import { Link } from 'react-router-dom'

import {useDispatch} from 'react-redux'
import { authActions } from '../../actions';
import PropTypes from 'prop-types'

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

LoggedButton.propTypes = {
    authActions: PropTypes.object.isRequired
}


export default LoggedButton;