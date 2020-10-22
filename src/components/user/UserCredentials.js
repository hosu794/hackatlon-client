import React from 'react'
import CurrentLevel from './CurrentLevel'
import DoneTasks from '../donetask/DoneTasks'
import PropTypes from 'prop-types'

function UserCredentials({username, name}) {

    return(
        <div>
            <h1>Nazwa użytkownika: {username}</h1>
            <p>Nazwa: {name}</p>
            <CurrentLevel />
            <DoneTasks />
        </div>
    )
}

UserCredentials.propTypes = {
    username: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired
}

export default UserCredentials;