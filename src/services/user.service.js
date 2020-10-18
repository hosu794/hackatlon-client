import {authHeader} from '../utils'

import {apiConstants} from '../constants'

import axios from 'axios'

export const userService = {
    loadUser,
    checkEmailAvaibility,
    checkUsernameAvailability,
    getUserProfile
  };

  function loadUser() {
    return axios.get(`${apiConstants.API_URL}/api/user/me`, {
      headers: authHeader(),
    });
  }
  
  function checkUsernameAvailability(username) {
    const body = JSON.stringify({ username });
  

  
    return axios.post(
      `${apiConstants.API_URL}/api/user/checkUsernameAvailability`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  
  function checkEmailAvaibility(email) {
    const body = JSON.stringify({ email });
  
    return axios.post(
      `${apiConstants.API_URL}/api/user/checkEmailAvailability`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  
  function getUserProfile(username) {
    return axios.get(
      `${apiConstants.API_URL}/api/user/${username}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  
