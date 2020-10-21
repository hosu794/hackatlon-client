import {authHeader } from '../utils'

import {apiConstants} from '../constants'

import axios from 'axios'

export const taskService = {
    getAllTasks, 
    getTasksByPath,
    getTasksTodoByPath
}


function getAllTasks() {
    return axios.get(
        `${apiConstants.API_URL}/api/task`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
}

function getTasksByPath(pathId) {
    return axios.get(
        `${apiConstants.API_URL}/api/task/path/${pathId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
}

function getTasksTodoByPath(pathId) {
    return axios.get(
        `${apiConstants.API_URL}/api/task/path/${pathId}/todo`,
        {
          headers: authHeader()
        }
      );
}