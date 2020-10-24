import { pathConstants } from '../constants'

export function path(state = {}, action) {
    switch (action.type) {
        case pathConstants.GET_ALL_PATHS_REQUEST:
        case pathConstants.GET_PATH_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case pathConstants.GET_ALL_PATHS_SUCCESS:
            return {
                ...state,
                loading: false,
                content: action.data
            }
        case pathConstants.GET_PATH_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                currentPath: action.data
            }
        case pathConstants.GET_ALL_PATHS_FAILURE:
        case pathConstants.GET_PATH_BY_ID_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}