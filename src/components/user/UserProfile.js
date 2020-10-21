import React from 'react'
import {useSelector} from 'react-redux'
import UserCredentials from './UserCredentials'

 function UserProfile() {

    const user = useSelector(state => state.user.user);

    

    return (
        <div>
            <h1>User Profile</h1>
            {user ? <UserCredentials username={user.username} name={user.name} /> : 'Loading...'}
        </div>
    )
}

export default UserProfile;