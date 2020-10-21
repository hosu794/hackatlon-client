import { taskConstants } from '../constants'
import { taskService } from '../services'
import { alertActions } from './alert.actions'

import { handleResponse } from '../utils'

export const taskActions = {
    getAllTasks,
    getTasksByPath,
    getTasksTodoByPath
}


function getAllTasks(service = taskService.getAllTasks) {

    return (dispatch) => {
        dispatch(request());

        return service().then(
            (response) => {
                dispatch(success(response.data));
            },
            (error) => {
                handleResponse(error);
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )
    }

    function request() {
        return { type: taskConstants.GET_ALL_TASKS_REQUEST }
    }

    function success(data) {
        return { type: taskConstants.GET_ALL_TASKS_SUCCESS, data }
    }

    function failure(error) {
        return { type: taskConstants.GET_ALL_TASKS_FAILURE, error }
    }
}


function getTasksByPath(pathId, service = taskService.getTasksByPath) {

    return (dispatch) => {
        dispatch(request());

        return service(pathId).then(
            (response) => {
                dispatch(success(response.data));
            },
            (error) => {
                handleResponse(error);
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )
    }

    function request() {
        return { type: taskConstants.GET_TASKS_BY_PATH_REQUEST }
    }

    function success(data) {
        return { type: taskConstants.GET_TASKS_TODO_BY_PATH_SUCCESS, data }
    }

    function failure(error) {
        return { type: taskConstants.GET_TASKS_BY_PATH_FAILURE, error }
    }
}

function getTasksTodoByPath(pathId, service = taskService.getTasksTodoByPath) {

    return (dispatch) => {
        dispatch(request());

        return service(pathId).then(
            (response) => {
                dispatch(success(response.data));
            },
            (error) => {
                handleResponse(error);
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )
    }

    function request() {
        return { type: taskConstants.GET_TASKS_TODO_BY_PATH_REQUEST }
    }

    function success(data) {
        return { type: taskConstants.GET_TASKS_BY_PATH_SUCCESS, data }
    }

    function failure(error) {
        return { type: taskConstants.GET_TASKS_TODO_BY_PATH_FAILURE, error }
    }
}