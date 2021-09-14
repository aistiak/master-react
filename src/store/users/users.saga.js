import {
  all,
  call,
  apply,
  takeEvery,
  takeLatest,
  put,
} from "redux-saga/effects";
import usersApi from "../../api/usersApi";
function* getUsers(action) {
  console.log(action.type);
  console.log(action.payload);
  const users = yield usersApi.getUsers();
  console.log(`user list`);
  console.log(users);
  yield put({
    type: "PUT_USERS",
    payload: users,
  });
}

function* emptyUsers(action) {
  yield put({
    type: "PUT_USERS",
    payload: [],
  });
}

function* onGetUsers() {
  yield takeLatest("GET_USERS", getUsers);
}

function* onEmptyUsers() {
  yield takeEvery("EMPTY_USERS", emptyUsers);
}

export default function* userSaga() {
  yield all([onGetUsers(), onEmptyUsers()]);
}
