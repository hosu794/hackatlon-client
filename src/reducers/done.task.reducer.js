import { donetaskConstants } from '../constants'

export function donetask(state = { content: [] }, action) {
    switch (action.type) {
        case donetaskConstants.CREATE_DONE_TASK_REQUEST:
        case donetaskConstants.DELETE_DONE_TASK_REQUEST:
            return {
                ...state,
                loading: false,
                content: state.content.filter((val) => val.id !== action.index),
            }
        case donetaskConstants.GET_CURRENT_LEVEL_REQUEST:
        case donetaskConstants.GET_DONETASKS_BY_CREATED_BY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case donetaskConstants.DELETE_DONE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case donetaskConstants.GET_DONETASKS_BY_CREATED_BY_SUCCESS:
            return {
                ...state,
                loading: false,
                content: state.content.concat(action.data.content)
            }
        case donetaskConstants.GET_CURRENT_LEVEL_SUCCESS:
            return {
                ...state,
                loading: false,
                currentLevel: action.data
            }
        case donetaskConstants.GET_DONETASKS_BY_CREATED_BY_SUCCESS:
            return {
                ...state,
                loading: false,
                content: action.data.content
            }
        case donetaskConstants.GET_CURRENT_LEVEL_FAILURE:
        case donetaskConstants.GET_DONETASKS_BY_CRAETED_BY_FAILURE:
        case donetaskConstants.CREATE_DONE_TASK_FAILURE:
        case donetaskConstants.DELETE_DONE_TASK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}