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

const ToDoDisplay = (props) => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(todo, "todo");
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todo.todoList.length!==0?todo.todoList.map((task) => {
          const { name, date, status, _id } = task;
          // console.log("tododisplay:",_id,task)
          
          if (status === "incomplete") {
            return (
              <ListItem
                key={_id}
                secondaryAction={
                  <IconButton
                    onClick={()=>props.deleter(_id)}
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
                    <Checkbox
                      edge="start"
                      //   tabIndex={-1}
                      onClick={()=>props.setComplete(_id,"complete")}
                      disableRipple
                      //   inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={name} primary={`${name}`} />
                </ListItemButton>
              </ListItem>
            );
          }
        }):<p>Your tasks will be listed here</p>}
      </List>
    </div>
  );
};

export default ToDoDisplay;
