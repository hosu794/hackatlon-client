import { apiConstants } from '../constants'

import axios from 'axios'

export const pathService = {
    getAllPaths,
    getPathById
}

function getAllPaths() {
    return axios.get(`${apiConstants.API_URL}/api/path`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

function getPathById(pathId) {
    return axios.get(`${apiConstants.API_URL}/api/path/${pathId}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}