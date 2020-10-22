import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {doneTaskActions} from '../../actions'
import DoneTaskItem from './DoneTaskItem';

function DoneTasks() {

    const dispatch = useDispatch();
    const content = useSelector(state => state.donetask.content);

    useEffect(() => {
        dispatch(doneTaskActions.getDoneTasksByCreatedBy());
    }, [])

    return (
        <div>
            <h1>Zaliczone zadania:</h1>
            {content ? content.map(item => (
                <DoneTaskItem path={item.task.path.title} title={item.task.title} id={item.id} key={item.id}/>
            )) : "Loading..."}
        </div>
    )
}


export default DoneTasks;