import React from 'react'
import PathRedirectButton from './PathRedirectButton'
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types'
import psycha from "../../assets/psycha.png"

const PathItem = ({title, id}) => {

    const user = useSelector(state => state.user.user);

    return (
        <div className="K1">
            <div className="contener-k1">
                <h1 id="tytul-kategoria" >{title}</h1>
                {user ? <PathRedirectButton id={id} /> : null}
                <img src={psycha} alt=""/>
            </div>
        </div>
        
    )
}

PathItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default PathItem
