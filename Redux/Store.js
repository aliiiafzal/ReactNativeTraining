import {configureStore} from '@reduxjs/toolkit';
import {applyMiddleware, createStore} from 'redux';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from './Reducers/UsersReducers';
import createSagaMiddleware from '@redux-saga/core';
import userSaga from './Sagas/UsersSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: userReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);
export default store;
