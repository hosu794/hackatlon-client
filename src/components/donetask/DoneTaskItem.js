import React from 'react'
import DoneTaskDeleteButton from './DoneTaskDeleteButton'
import PropTypes from 'prop-types'

 function DoneTaskItem({path, title, id}) {
    return (
        <div className="ukonczone-zadanie">
            <h1>{title}</h1>
            <p>Kategoria: {path}</p>
            <DoneTaskDeleteButton id={id} />
        </div>
    )
}

DoneTaskItem.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, 
    id: PropTypes.number.isRequired
}

export default DoneTaskItem;