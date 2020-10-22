import React from 'react'
import {useDispatch} from 'react-redux'
import {doneTaskActions} from '../../actions'

 function DoneTaskDeleteButton({id}) {

    const dispatch = useDispatch();

    function deleteDoneTask() {
        dispatch(doneTaskActions.deleteDoneTask(id));
    }

    return (
       <button onClick={deleteDoneTask}>Usuń zadanie</button>
    )
}

export default DoneTaskDeleteButton;
