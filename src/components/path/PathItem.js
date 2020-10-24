import React from 'react'
import PathRedirectButton from './PathRedirectButton'
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types'
import psycha from "../../assets/psycha.png"

const PathItem = ({title, id, image}) => {

    const user = useSelector(state => state.user.user);
    const loggedIn = useSelector(state => state.authentication.loggedIn);

    return (
        <div className="K1">
            <div className="contener-k1">
                <h1 id="tytul-kategoria" >{title}</h1>
                {loggedIn ? <PathRedirectButton id={id} image={image} /> : null}
               {!loggedIn ? (<img className="center" src={image} alt=""/>) : null } 
            </div>
        </div>
        
    )
}

PathItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default PathItem
