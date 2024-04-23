import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoAction } from "@/store/todoSlice";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const CompletedTasks = () => {
  console.log("in completed tasks");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  console.log(todo);
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todo.todoList.length!==0?todo.todoList.map((task) => {
          const { name, date, completed, id } = task;

          const handleDelete = () => {
            dispatch(todoAction.removeTask(id));
          };
          console.log("task", task);
          if (completed === true) {
            return (
              <ListItem
                key={id}
                secondaryAction={
                  <IconButton
                    onClick={handleDelete}
                    edge="end"
                    aria-label="comments"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <DoneAllIcon />
                  </ListItemIcon>
                  <ListItemText id={name} primary={`${name}`} />
                </ListItemButton>
              </ListItem>
            );
          }
        }):<p>Completed Tasks will be visible here</p> }
      </List>
    </div>
  );
};

export default CompletedTasks;
