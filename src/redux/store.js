import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { itemsReduser, isLoadingReduser } from './items/items-reducer';
import filterReduser from './filter/filter-reducer';
import authReducer from './auth/auth-reducer';

import { persistReducer, persistStore } from 'redux-persist';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const contactsReduser = combineReducers({
  items: itemsReduser,
  filter: filterReduser,
  isLoading: isLoadingReduser,
});

const rootReducer = combineReducers({
  contacts: contactsReduser,
  auth: persistReducer(authPersistConfig, authReducer),
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

const s = { store, persistor };
export default s;

// export default store;
