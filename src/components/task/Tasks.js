import React, {useEffect} from 'react'
import {taskActions} from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import TaskItem from './TaskItem';
import PropTypes from 'prop-types'

function Tasks(props) {

    const dispatch = useDispatch();

    const content = useSelector(state => state.task.content);

    useEffect(() => {
        dispatch(taskActions.getTasksTodoByPath(props.match.params.id));
    }, [content])

    return (
        <div> 
            <h1>Zadania</h1>
            {content ? content.map(item => (
               <TaskItem  key={item.id} title={item.title} id={item.id} />
            )) : "Brak dostępnych zadań dla kategorii"}
        </div>
    )
}

Tasks.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object)
}

export default Tasks;