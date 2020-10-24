import React, {useEffect} from 'react'
import {pathActions, taskActions} from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import TaskItem from './TaskItem';
import PropTypes from 'prop-types'

function Tasks(props) {

    const dispatch = useDispatch();

    const content = useSelector(state => state.task.content);
    const path = useSelector(state => state.path.currentPath);

    useEffect(() => {
        dispatch(taskActions.getTasksTodoByPath(props.match.params.id));
       
    }, [content])

    useEffect(() => {
        dispatch(pathActions.getPathById(props.match.params.id));
    }, [])

    return (
        <div className="napis-zadania"> 
            <h1>{path ? path.title : "Ładowanie..." }</h1>
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