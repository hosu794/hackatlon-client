import {pathConstants} from '../constants'
import {alertActions} from './'
import { history, handleResponse } from "../utils";
import {pathService} from '../services'

export const pathActions = {
    getAllPaths
}

function getAllPaths(service = pathService.getAllPaths) {

    return dispatch => {
        dispatch(request());


        return service().then(
            (response) => {
            console.log(response.data.content)
                dispatch(success(response.data.content));
            }, 
            (error) => {
                handleResponse(error);
                dispatch(failure(error.response.data.message));
                dispatch(alertActions.error(error.response.data.message));
            }
        )
    }


    function request() {
        return {type: pathConstants.GET_ALL_PATHS_REQUEST}
    }

    function success(data) {
        return {type: pathConstants.GET_ALL_PATHS_SUCCESS, data }
    }

    function failure(error) {
        return {type: pathConstants.GET_ALL_PATHS_FAILURE, error}
    }
}
