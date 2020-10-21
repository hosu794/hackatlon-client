import {authHeader } from '../utils'

import {apiConstants} from '../constants'

import axios from 'axios'

export const doneTaskService = {
    getDoneTasksByCreatedBy, 
    getCurrentLevel, 
    createDoneTask, 
    deleteDoneTask
}


function getDoneTasksByCreatedBy() {
    return axios.get(`${apiConstants.API_URL}/api/done/task/me`, {
        headers: authHeader()
    });
}


function getCurrentLevel() {
  return axios.get(`${apiConstants.API_URL}/api/done/task/level`, {
      headers: authHeader()
  });
}

function createDoneTask(request) {

   const body = JSON.stringify(request);

   return axios.post(
    `${apiConstants.API_URL}/api/done/task`,
    body,
    {
      headers: authHeader(),
    }
  );

}

function deleteDoneTask(doneTaskId) {
    return axios.delete(`${apiConstants.API_URL}/api/done/task/${doneTaskId}`, {
        headers: authHeader()
    });
}