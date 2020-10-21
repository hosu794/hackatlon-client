import { combineReducers } from 'redux'
import { alert } from './alert.reducer'
import { authentication } from './authentication.reducer'
import { user } from './user.reducer'
import { registration } from './registration.reducer'
import { path } from './path.reducer'
import { task } from './task.reducer'

const rootReducer = combineReducers({
    alert,
    authentication,
    user,
    registration,
    path,
    task
});

export default rootReducer;