import React, {useEffect} from 'react'
import {doneTaskActions} from '../../actions'
import {useSelector, useDispatch} from 'react-redux'

 function CurrentLevel() {

    const dispatch = useDispatch();
    const level = useSelector(state => state.donetask.currentLevel); 

    useEffect(() => {
      dispatch(doneTaskActions.getCurrentLevel());
    }, [])

    return (
        <div>
           Obecny poziom:  {level ? level.level : "Loading..."}
        </div>
    )
}

export default CurrentLevel;
