import {combineReducers} from 'redux'
import {alert} from './alert.reducer'
import {authentication} from './authentication.reducer'
import {user} from './user.reducer'
import {registration} from './registration.reducer'

const rootReducer = combineReducers({
 alert, 
 authentication, 
 user,
 registration
});

export default rootReducer;