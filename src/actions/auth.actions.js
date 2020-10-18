import { authConstants, userConstants } from "../_constants";
import { authService, userService } from "../_services";
import { alertActions } from "./";
import { history, handleResponse } from "../_helpers";

export const authActions = {
  logout,
  register,
  login,
  updateUsername,
  updatePassword,
  clearError,
};

function login({ usernameOrEmail, password }, service = authService.login) {
  return (dispatch) => {
    dispatch(request({ usernameOrEmail, password }));

    return service({ usernameOrEmail, password }).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
        window.location.reload(true);
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST, user };
  }

  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  authService.logout();

  return {
    type: authConstants.LOGOUT,
  };
}

function register(user, service = authService.register) {
  return (dispatch) => {
    dispatch(request(user));

    console.log("Some");
    return service(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
        window.location.reload(true);
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(user) {
    return { type: authConstants.REGISTER_REQUEST, user };
  }

  function success(user) {
    return { type: authConstants.REGISTER_SUCCESS, user };
  }

  function failure(error) {
    return { type: authConstants.REGISTER_FAILURE, error };
  }
}

function updateUsername(username, service = authService.updateUsername) {
  return (dispatch) => {
    dispatch(request(username));

    return service(username).then(
      (response) => {
        dispatch(success(response.data));
        history.push("/account");
        window.location.reload(true);
        dispatch(alertActions.success("Username updated successfully"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(username) {
    return { type: authConstants.UPDATE_USERNAME_REQUEST, username };
  }

  function success(response) {
    return { type: authConstants.UPDATE_USERNAME_SUCCESS, response };
  }

  function failure(error) {
    return { type: authConstants.UPDATE_USERNAME_FAILURE, error };
  }
}

function updatePassword(password, service = authService.updatePassword) {
  return (dispatch) => {
    dispatch(request(password));

    return service(password).then(
      (response) => {
        dispatch(success(response.data));
        history.push("/account");
        window.location.reload(true);
        dispatch(alertActions.success("Password updated successfully"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(username) {
    return { type: authConstants.UPDATE_PASSWORD_REQUEST, password };
  }

  function success(response) {
    return { type: authConstants.UPDATE_PASSWORD_SUCCESS, response };
  }

  function failure(error) {
    return { type: authConstants.UPDATE_PASSWORD_FAILURE, error };
  }
}

function clearError() {
  return { type: authConstants.CLEAR_ERROR };
}