import { authService } from "../services";

export function handleResponse(error, service = authService) {
  if (error.response.status === 401) {
    service.logout();
  }

  return error;
}