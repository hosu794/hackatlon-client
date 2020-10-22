import React from 'react'
import { Link } from 'react-router-dom'


function LoginButton() {
    return ( 
        <div>
        <a className = "logowanie-przycisk" >
        <Link to = "/login"> <h5 className="is-white">Zaloguj się</h5></Link>
        </a> </div>
    )
}


export default LoginButton;