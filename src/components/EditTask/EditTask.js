import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import classes from "./EditTask.module.css";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { todoAction } from "@/store/todoSlice";

const EditTask = (props) => {
    const dispatch=useDispatch()
  const { name, date, status, _id } = props;
  console.log(props)
  const editHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/edit-task", {
        method: "POST",
        body: JSON.stringify({
          ...props,
          name: e.target.todotask.value
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      dispatch(todoAction.editTask({id:_id,name:e.target.todotask.value}))
      props.showEdit(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${classes["edit-form-bg"]} w-screen h-screen flex justify-center items-center fixed z-50`}
    >
      <div
        className={`${classes["form-container"]} flex flex-col justify-center items-center p-3 bg-white rounded-lg`}
      >
        <Button
          variant="outlined"
          color="error"
          className="self-end"
          onClick={() => props.showEdit(false)}
        >
          <CloseIcon />
        </Button>
        <form className={`container`} onSubmit={editHandler}>
          <h1 className="text-2xl m-5 ml-0">Edit this Task</h1>
          <FormControl>
            <div className="flex">
              <TextField
                className="rounded-r-none"
                size="small"
                variant="outlined"
                placeholder="Add your task here..."
                name="todotask"
                id="todoinput"
                defaultValue={name}
              ></TextField>
              <Button type="submit" variant="contained">
                <EditIcon />
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
