import React, { useEffect } from 'react'

function UserCredentials({username, name}) {

    useEffect(() => {
        console.log(username, name)
    }, [])

    return(
        <div>
            <h1>Nazwa użytkownika: {username}</h1>
            <p>Nazwa: {name}</p>
        </div>
    )
}

export default UserCredentials;