import axios from 'axios';

import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  registerRequest,
  registerSuccess,
  registerError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = userData => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', userData);
    console.log(response);

    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(registerError(error.message));
  }
};

export const login = userData => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', userData);
    console.log(response);

    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(loginError(error.message));
  }
};

export const logout = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    console.log(error.message);
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  console.log(persistedToken);

  if (!persistedToken) {
    console.log('no persisted token');
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(getCurrentUserError(error.message));
  }
};
