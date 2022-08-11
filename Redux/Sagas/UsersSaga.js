import {Alert} from 'react-native';
import {put, call, takeEvery} from 'redux-saga/effects';
import {getUsers} from '../../API/UsersApi';
import {GET_USERS, USERS_DATA} from '../Actions/UsersActions';

export function* userFetch() {
  const data = yield call(getUsers);
  if (data) {
    yield put({type: USERS_DATA, payload: data});
  } else {
    Alert.alert('Data Not Load from API');
  }
}

export function* userSaga() {
  yield takeEvery(GET_USERS, userFetch);
}
export default userSaga;
