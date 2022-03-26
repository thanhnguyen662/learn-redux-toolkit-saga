import todoApi from '../../../../api/todoApi';
import { todoActions } from './todoSlice';
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchTodoData() {
   try {
      const response = yield call(todoApi.getTodos);
      console.log('🚀 ~ response', response);
      yield put(todoActions.fetchTodoListSuccess(response));
   } catch (error) {
      yield put(todoActions.fetchTodoListFail());
   }
}

export default function* todoSaga() {
   yield takeLatest(todoActions.fetchTodoList.type, fetchTodoData);
}
