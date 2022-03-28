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
      updateTodoStatusRequest: (state) => {
         state.loading = true;
      },
      updateTodoStatusSuccess: (state, action) => {
         const { id, completed } = action.payload;
         const findIndex = state.data.findIndex((i) => i.id === Number(id));

         state.loading = false;
         state.data[findIndex] = {
            ...state.data[findIndex],
            completed: completed,
         };
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
