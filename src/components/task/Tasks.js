import React, {useEffect} from 'react'
import {taskActions} from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import TaskItem from './TaskItem';

function Tasks(props) {

    const dispatch = useDispatch();

    const content = useSelector(state => state.task.content);

    useEffect(() => {
        dispatch(taskActions.getTasksTodoByPath(props.match.params.id));
    }, [])

    return (
        <div> 
            <h1>Zadania</h1>
            {content ? content.map(item => (
               <TaskItem  key={item.id} title={item.title} id={item.id} />
            )) : "Loading..."}
        </div>
    )
}
export default Tasks;