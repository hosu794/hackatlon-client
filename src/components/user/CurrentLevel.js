import React, {useEffect} from 'react'
import {doneTaskActions} from '../../actions'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'

 function CurrentLevel() {

    const dispatch = useDispatch();
    const level = useSelector(state => state.donetask.currentLevel); 

    useEffect(() => {
      dispatch(doneTaskActions.getCurrentLevel());
    }, [])

    return (
        <div className="poziomy">
          <h3>Obecny poziom:</h3> <p className="poziom">{level ? level.level : "Loading..."} </p>
        </div>
    )
}

CurrentLevel.propTypes = {
  level: PropTypes.number,
  doneTaskActions: PropTypes.object
}

export default CurrentLevel;
