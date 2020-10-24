import React from 'react'
import CurrentLevel from './CurrentLevel'
import DoneTasks from '../donetask/DoneTasks'
import PropTypes from 'prop-types'

function UserCredentials({username, name}) {

    return(
        <div>
            <div className="profil-dane">
            <h1>Nazwa użytkownika:</h1> <p>{username}</p>
            <h1>Imię i Nazwisko:</h1> <p>{name}</p>
            <CurrentLevel />
            </div>
            <DoneTasks />
        </div>
    )
}

UserCredentials.propTypes = {
    username: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired
}

export default UserCredentials;