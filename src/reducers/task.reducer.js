import { taskConstants } from '../constants'

export function task(state = {}, action) {
    switch (action.type) {
        case taskConstants.GET_ALL_TASKS_REQUEST:
        case taskConstants.GET_TASKS_BY_PATH_REQUEST:
        case taskConstants.GET_TASKS_TODO_BY_PATH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case taskConstants.GET_ALL_TASKS_SUCCESS:
        case taskConstants.GET_TASKS_BY_PATH_SUCCESS:
        case taskConstants.GET_TASKS_TODO_BY_PATH_SUCCESS:
            console.log(action.data.content)
            return {
                ...state,
                loading: false,
                content: action.data.content
            }
        case taskConstants.GET_ALL_TASKS_FAILURE:
        case taskConstants.GET_TASKS_BY_PATH_FAILURE:
        case taskConstants.GET_TASKS_TODO_BY_PATH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}