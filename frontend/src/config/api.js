// API Configuration
// Uses environment variable for API base URL
// Defaults to the Node.js backend URL for development
const API_BASE_URL = 'https://jetpathairline.onrender.com';

export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: `${API_BASE_URL}/api/Login/login`,
  REGISTER: `${API_BASE_URL}/api/Login/register`,
  LOGOUT: `${API_BASE_URL}/api/Login/logout`,
  GET_NAME: `${API_BASE_URL}/api/Login/get-name`,
  GET_ID: `${API_BASE_URL}/api/Login/get-id`,
  GET_USER_BY_ID: (id) => `${API_BASE_URL}/api/Login/get-user-by-id/${id}`,
  UPDATE_USER: `${API_BASE_URL}/api/Login/update-user`,
  UPDATE_FULL_USER: `${API_BASE_URL}/api/Login/update-full-user`,

  // Flight endpoints
  GET_ALL_FLIGHTS: `${API_BASE_URL}/api/Flight/get-all-flights`,
  GET_FLIGHT_BY_ID: (id) => `${API_BASE_URL}/api/Flight/get-flight-by-id/${id}`,

  // User Flights endpoints
  GET_USER_FLIGHTS_BY_ID: (id) => `${API_BASE_URL}/api/UserFlights/get-all-user-flights-by-id/${id}`,
  ADD_USER_FLIGHT: `${API_BASE_URL}/api/UserFlights/add-user-flight`,
  REMOVE_USER_FLIGHT: `${API_BASE_URL}/api/UserFlights/remove-user-flight-by-id`,

  // Review endpoints
  GET_ALL_REVIEWS: `${API_BASE_URL}/api/Review/get-all-reviews`,
  ADD_REVIEW: `${API_BASE_URL}/api/Review/add-review`,

  // Location endpoints
  GET_ALL_LOCATIONS: `${API_BASE_URL}/api/Location/get-all-locations`,

  // Admin endpoints
  ADMIN_GET_FLIGHTS: `${API_BASE_URL}/api/flights`,
  ADMIN_ADD_FLIGHT: `${API_BASE_URL}/api/flights`,
  ADMIN_DELETE_FLIGHT: (id) => `${API_BASE_URL}/api/flights/${id}`,
  ADMIN_GET_ALL_USERS: `${API_BASE_URL}/api/Admin/get-all-users`,
  ADMIN_CREATE_USER: `${API_BASE_URL}/api/Admin/create-user`,
  ADMIN_UPDATE_USER_ADMIN: `${API_BASE_URL}/api/Admin/update-user-admin`,
  ADMIN_DELETE_USER: (id) => `${API_BASE_URL}/api/Admin/delete-user/${id}`,
  ADMIN_UPLOAD_IMAGE: `${API_BASE_URL}/api/Admin/upload-image`,

  // Support endpoints
  ADD_SUPPORT_MESSAGE: `${API_BASE_URL}/api/Support/add-message`,
  GET_ALL_SUPPORT_MESSAGES: `${API_BASE_URL}/api/Support/get-all-messages`,
  UPDATE_SUPPORT_MESSAGE: `${API_BASE_URL}/api/Support/update-message`,
  DELETE_SUPPORT_MESSAGE: (id) => `${API_BASE_URL}/api/Support/delete-message/${id}`,
};

export default API_BASE_URL;
