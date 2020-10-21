import React from 'react'
import DoneTaskDeleteButton from './DoneTaskDeleteButton'

 function DoneTaskItem({path, title, id}) {
    return (
        <div>
            <h1>Tytuł: {title}</h1>
            <p>Kategoria: {path}</p>
            <DoneTaskDeleteButton id={id} />
        </div>
    )
}


export default DoneTaskItem;