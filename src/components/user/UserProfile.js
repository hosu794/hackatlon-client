import React from 'react'
import {useSelector} from 'react-redux'
import UserCredentials from './UserCredentials'
import PropTypes from 'prop-types'

 function UserProfile() {

    const user = useSelector(state => state.user.user);

    

    return (
        <div>
            <h1 className="profil">Profil</h1>
            {user ? <UserCredentials username={user.username} name={user.name} /> : 'Loading...'}
        </div>
    )
}

UserProfile.propTypes = {
    user: PropTypes.object
}

export default UserProfile;