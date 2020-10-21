import React from 'react'
import Siatkarz from "../../../src/assets/siatkarz.png"
import {useSelector, useDispatch} from 'react-redux'
import RegisterButton from '../auth/RegisterButton';


function About() {

    const loggedIn = useSelector((state) => state.authentication.loggedIn);

    return (
        <section class="sekcja-1">
            <div class="presentation">
                <div class="intro">
                    <div class="intro-tekst"><h3 id="onas">O NAS</h3></div>
                    <div class="intro-tekst"><p id="paragraf1">Aplikacja stworzona z myślą o zdrowych nawykach</p></div>
                    <div class="intro-tekst"><p id="paragraf2">Dołącz do nas, aby wykonywać regularnie wyzwania związane z aktywnością fizyczną i sprawdzaj swoje postępy, aby pozostać zmotywowanym. 
                    </p></div>
                    {loggedIn ? null : <RegisterButton />}
                </div>
                <div class="intro-image">
                    <img src={Siatkarz} alt=""></img>
                </div>
            </div>
        </section> 
    )
}

export default About
