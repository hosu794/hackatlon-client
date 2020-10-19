import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {authActions} from '../../actions'

 function LoginButton() {

   

    return (
        <div>
            <a  className="logowanie-przycisk">
         <Link to="/login"><h5 className="is-white">Zaloguj się</h5></Link>
        </a>
        </div>
    )
}


export default LoginButton;