import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   loading: false,
   data: [],
};

const todoSlice = createSlice({
   name: 'todo',
   initialState: initialState,
   reducers: {
      fetchTodoList: (state) => {
         state.loading = true;
      },
      fetchTodoListSuccess: (state, action) => {
         state.loading = false;
         state.data = action.payload;
      },
      fetchTodoListFail: (state) => {
         state.loading = false;
      },
   },
});

// Actions
export const todoActions = todoSlice.actions;

// Selectors
export const todoListData = (state) => state.todo.data;

// Reducers
const todoReducer = todoSlice.reducer;
export default todoReducer;
