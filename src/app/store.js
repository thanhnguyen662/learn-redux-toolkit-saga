import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/pages/TodoPage/todoSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
   todo: todoReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(sagaMiddleware);
   },
});

sagaMiddleware.run(rootSaga);

export default store;
