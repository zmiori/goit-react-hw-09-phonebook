// import { createSelector } from 'reselect';

export const getAuthUser = state => state.auth.user;
export const getAuthUserEmail = state => state.auth.user.email;
export const getAuthUserName = state => state.auth.user.name;
export const getAuthToken = state => state.auth.token;
export const getAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const getAuthIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
