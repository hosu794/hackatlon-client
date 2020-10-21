import { donetaskConstants } from '../constants'
import { handleResponse, history } from '../utils'

import { donetaskConstants, doneTaskService } from '../services'
import { alertActions } from './'
import { createDispatchHook } from 'react-redux'
export const doneTaskActions = {
    getDoneTasksByCreatedBy,
    getCurrentLevel,
    createDoneTask,
    deleteDoneTask
}

function getDoneTasksByCreatedBy(service = doneTaskService.getDoneTasksByCreatedBy) {

    return (dispatch) => {

        dispatch(request());

        return service().then(
            (response) => {
                dispatch(success(response.data));
            },
            (error) => {
                handleResponse(error);
                dispatch(failure(error.response.data.message));
                dispatch(alertActions.error(error.response.data.message));
            }
        )
    }

    function request() {
        return { type: donetaskConstants.GET_DONETASKS_BY_CREATED_BY_REQUEST }
    }

    function success(data) {
        return { type: donetaskConstants.GET_DONETASKS_BY_CREATED_BY_SUCCESS, data }
    }

    function failure(error) {
        return { type: donetaskConstants.GET_DONETASKS_BY_CRAETED_BY_FAILURE, error }
    }
}

function getCurrentLevel(service = doneTaskService.getCurrentLevel) {

    return (dispatch) => {
        dispatch(request());

        return service().then(
            (response) => {
                dispatch(success(response.data));
            },
            (error) => {
                handleResponse(error);
                dispatch(failure(error.response.data.message));
                dispatch(alertActions.error(error.response.data.message));
            }
        )
    }

    function request() {
        return { type: donetaskConstants.GET_CURRENT_LEVEL_REQUEST }
    }

    function success(data) {
        return { type: donetaskConstants.GET_CURRENT_LEVEL_SUCCESS, data }
    }

    function failure(error) {
        return { type: donetaskConstants.GET_CURRENT_LEVEL_FAILURE, error }
    }
}

function createDoneTask(doneTaskRequest, service = doneTaskService.createDoneTask) {

    return (dispatch) => {
        dispatch(request());

        return service(doneTaskRequest).then(
            (response) => {
                dispatch(success(response.data));
                dispatch(alertActions.success("Done task added successfully"));
            },
            (error) => {
                handleResponse(error);
                dispatch(failure(error.response.data.message));
                dispatch(alertActions.error(error.response.data.message));
            }
        )
    }

    function request() {
        return { type: donetaskConstants.CREATE_DONE_TASK_REQUEST }
    }

    function success(data) {
        return { type: donetaskConstants.CREATE_DONE_TASK_SUCCESS, data }
    }

    function failure(error) {
        return { type: donetaskConstants.CREATE_DONE_TASK_FAILURE, error }
    }
}

function deleteDoneTask(doneTaskId, service = doneTaskService.deleteDoneTask) {

    return (dispatch) => {
        dispatch(request());

        return service(doneTaskRequest).then(
            (response) => {
                dispatch(success(response.data));
                dispatch(alertActions.success("Done task added successfully"));
            },
            (error) => {
                handleResponse(error);
                dispatch(failure(error.response.data.message));
                dispatch(alertActions.error(error.response.data.message));
            }
        )

    }

    function request() {
        return { type: donetaskConstants.DELETE_DONE_TASK_REQUEST }
    }

    function success(data) {
        return { type: donetaskConstants.DELETE_DONE_TASK_SUCCESS, data }
    }

    function failure(error) {
        return { type: donetaskConstants.DELETE_DONE_TASK_FAILURE, error }
    }
}