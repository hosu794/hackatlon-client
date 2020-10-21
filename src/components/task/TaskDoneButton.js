import React from 'react'
import {useDispatch} from 'react-redux'
import {doneTaskActions} from '../../actions'


 function TaskDoneButton({id}) {
    const dispatch = useDispatch();

    function createDoneTask() {
        alert("Check task: " + id);
        const newTaskDone = {
            taskId: id
        }
        dispatch(doneTaskActions.createDoneTask(newTaskDone))
    }

    return (
        <button onClick={createDoneTask}>Check task</button>
    )
}


export default TaskDoneButton;