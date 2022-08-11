import {GET_USERS, USERS_DATA} from '../Actions/UsersActions';

const initialState = {
  users: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {...state};
    case USERS_DATA:
      return {...state, users: action.payload};
    default:
      return state;
  }
}
export default userReducer;
