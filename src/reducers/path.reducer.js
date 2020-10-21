import { pathConstants } from '../constants'

export function path(state = {}, action) {
    switch (action.type) {
        case pathConstants.GET_ALL_PATHS_REQUEST:
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
        case pathConstants.GET_ALL_PATHS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}