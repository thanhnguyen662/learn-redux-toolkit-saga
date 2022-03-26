import { all } from 'redux-saga/effects';
import todoSaga from '../features/Todo/pages/TodoPage/todoSaga';

export default function* rootSaga() {
   yield all([todoSaga()]);
}
