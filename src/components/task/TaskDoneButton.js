import React from 'react'

 function TaskDoneButton({id}) {

    function createDoneTask() {
        alert("Check task: " + id);
    }

    return (
        <button onClick={createDoneTask}>Check task</button>
    )
}


export default TaskDoneButton;