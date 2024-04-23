import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: 0.4099690453,
      name: "new task",
      date: "Tue Apr 23 2024 13:10:02 GMT+0530 (India Standard Time)",
      completed: false,
    },
    {
      id: 0.4099690453,
      name: "new task",
      date: "Tue Apr 23 2024 13:10:02 GMT+0530 (India Standard Time)",
      completed: true,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      console.log(action.payload);
      state.todoList.push(action.payload);
    },
    removeTask(state, action) {
      state.todoList = state.todoList.filter((task) => {
        return task.id != action.payload;
      });
    },
    setCompleted(state, action) {
      state.todoList.forEach((task) => {
        if (task.id === action.payload) {
          task.completed = true;
        }
      });
    },
  },
});

export const todoAction = todoSlice.actions;

export default todoSlice.reducer;
