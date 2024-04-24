import React from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "@/store/todoSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ToDoForm = (props) => {
  const dispatch = useDispatch();


  return (
    <form className={`container`} onSubmit={props.submit}>
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
          <Button type="submit" variant="contained">
            <AddIcon />
          </Button>
        </div>
      </FormControl>
    </form>
  );
};

export default ToDoForm;
