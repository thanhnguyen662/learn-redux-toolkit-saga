import todoApi from '../../../../api/todoApi';
import { todoActions } from './todoSlice';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchTodoData() {
   try {
      const response = yield call(todoApi.getTodos);
      yield put(todoActions.fetchTodoListSuccess(response));
   } catch (error) {
      yield put(todoActions.fetchTodoListFail());
   }
}

function* updateTodoStatusRequest(action) {
   yield put(todoActions.updateTodoStatusSuccess(action.payload));
}

export default function* todoSaga() {
   yield takeLatest(todoActions.fetchTodoList.type, fetchTodoData);
   yield takeEvery(
      todoActions.updateTodoStatusRequest.type,
      updateTodoStatusRequest
   );
}
