import React from 'react'
import {useDispatch} from 'react-redux'
import {doneTaskActions} from '../../actions'
import PropTypes from 'prop-types'

 function DoneTaskDeleteButton({id}) {

    const dispatch = useDispatch();

    function deleteDoneTask() {
        dispatch(doneTaskActions.deleteDoneTask(id));
    }

    return (
       <button onClick={deleteDoneTask}>Usuń zadanie</button>
    )
}

DoneTaskDeleteButton.propTypes = {
    id: PropTypes.number.isRequired
}

export default DoneTaskDeleteButton;
