import React, { useEffect } from 'react'
import CurrentLevel from './CurrentLevel'
import DoneTasks from '../donetask/DoneTasks'

function UserCredentials({username, name}) {

    useEffect(() => {
        console.log(username, name)
    }, [])

    return(
        <div>
            <h1>Nazwa użytkownika: {username}</h1>
            <p>Nazwa: {name}</p>
            <CurrentLevel />
            <DoneTasks />
        </div>
    )
}

export default UserCredentials;