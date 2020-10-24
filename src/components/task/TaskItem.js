import React from 'react'
import TaskDoneButton from './TaskDoneButton'
import PropTypes from 'prop-types'

 function TaskItem({id, title}) {
    return (
        <div className="tasks">
            <p>{title}</p>
            <TaskDoneButton id={id} />
        </div>
    )
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default TaskItem;
