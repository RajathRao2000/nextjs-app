import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
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
      console.log(action.payload);
      state.todoList = state.todoList.filter((task) => {
        return task._id != action.payload;
      });
    },
    setCompleted(state, action) {
      console.log("setcomp", action.payload);
      state.todoList.forEach((task) => {
        if (task._id === action.payload.id) {
          task.status = action.payload.value;
        }
      });
    },
    getAll(state, action) {
      state.todoList = action.payload;
    },
    editTask(state,action){
      state.todoList.forEach(task=>{
        if(task._id===action.payload.id){
          task.name=action.payload.name
        }
      })

    }
  },
});

export const todoAction = todoSlice.actions;

export default todoSlice.reducer;
