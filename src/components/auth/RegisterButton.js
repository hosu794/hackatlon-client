import React from 'react'
import { Link } from 'react-router-dom'

 function RegisterButton() {
    return (
        <div>
             <div class="rejestracja"><a href="#">
                 <Link to="/register">
                 <h3>Zarejestruj się</h3></Link>
                 </a></div>
        </div>
    )
}

export default RegisterButton;