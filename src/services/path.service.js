
import {apiConstants} from '../constants'

import axios from 'axios'

export const pathService = {
    getAllPaths
}

function getAllPaths() {
    return axios.get(`${apiConstants.API_URL}/api/path`,
    {
        headers: {
            "Content-Type": "application/json"
        }
    }
    );
}