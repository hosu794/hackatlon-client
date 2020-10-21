import React from 'react'
import PathRedirectButton from './PathRedirectButton'
import {useSelector} from 'react-redux'
const PathItem = ({title, id}) => {

    const user = useSelector(state => state.user.user);



    return (
        <div className="K1">
        <h1 >{title}</h1>
        {user ? <PathRedirectButton id={id} /> : null}
    </div>
    )
}

export default PathItem
