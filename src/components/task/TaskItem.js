import React from 'react'
import TaskDoneButton from './TaskDoneButton'

 function TaskItem({id, title}) {
    return (
        <div>
            <p>{title}</p>
            <TaskDoneButton id={id} />
        </div>
    )
}

export default TaskItem;
