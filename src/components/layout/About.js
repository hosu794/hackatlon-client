import React from 'react'
import Siatkarz from "../../../src/assets/siatkarz.png"
import {useSelector, useDispatch} from 'react-redux'
import RegisterButton from '../auth/RegisterButton';
import PropTypes from 'prop-types';


function About() {

    const loggedIn = useSelector((state) => state.authentication.loggedIn);

    return (
        <section classNameName="sekcja-1">
            <div classNameName="presentation">
                <div classNameName="intro">
                    <div className="intro-tekst"><h3 id="onas">O NAS</h3></div>
                    <div className="intro-tekst"><p id="paragraf1">Aplikacja stworzona z myślą o zdrowych nawykach</p></div>
                    <div className="intro-tekst"><p id="paragraf2">Dołącz do nas, aby wykonywać regularnie wyzwania związane z aktywnością fizyczną i sprawdzaj swoje postępy, aby pozostać zmotywowanym. 
                    </p></div>
                    {loggedIn ? null : <RegisterButton />}
                </div>
                <div className="intro-image">
                    <img src={Siatkarz} alt=""></img>
                </div>
            </div>
        </section> 
    )
}

About.propTypes = {
    loggedIn: PropTypes.bool
}

export default About
