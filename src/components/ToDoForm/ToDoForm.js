import React from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "@/store/todoSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const ToDoForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const todoTask = {
      id: Math.random(),
      name: e.target.todotask.value,
      date: new Date().toString(),
      completed: false,
    };
    console.log(todoTask);
    dispatch(todoAction.addTask(todoTask));
  };

  return (
    <form className={`container`} onSubmit={submitHandler}>
      {/* <input className={`border-2 `} name="todotask" />
      <button className="" type="submit">
        Submit
      </button> */}
      <FormControl>
          <FormLabel htmlFor="todoinput">Enter Task</FormLabel>
        <div className=" flex">
          <TextField
          className="rounded-r-none"
            size="small"
            variant="outlined"
            placeholder="Add your task here..."
            name="todotask"
            id="todoinput"
          ></TextField>
        <Button type="submit" variant="contained"><AddIcon /></Button>
        </div>
      </FormControl>
    </form>
  );
};

export default ToDoForm;
