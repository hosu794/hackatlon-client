import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {doneTaskActions} from '../../actions'
import DoneTaskItem from './DoneTaskItem';
import PropTypes from 'prop-types'
import { object } from 'yup';

function DoneTasks() {

    const dispatch = useDispatch();
    const content = useSelector(state => state.donetask.content);

    useEffect(() => {
        dispatch(doneTaskActions.getDoneTasksByCreatedBy());
    }, [])

    return (
        <div>
            <h1 className="zaliczone-zadania-napis">Zaliczone zadania:</h1>
            {content ? content.map(item => (
                <DoneTaskItem path={item.task.path.title} title={item.task.title} id={item.id} key={item.id}/>
            )) : "Loading..."}
        </div>
    )
}

DoneTasks.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object),
    doneTaskActions: PropTypes.object
}

export default DoneTasks;