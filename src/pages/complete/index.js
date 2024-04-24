import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoAction } from "@/store/todoSlice";
import { MongoClient } from "mongodb";
import { uiactions } from "@/store/uiSlice";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const CompletedTasks = (props) => {
  console.log("in completed tasks");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  console.log(todo);
  const loading=useSelector(state=>state.ui.loader)

  const deleteHandler = async (id) => {
    dispatch(uiactions.setLoader(true))
    console.log("delete handler", id);
    try {
      const response = await fetch("/api/delete-task", {
        method: "POST",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("delete success", data);
      dispatch(todoAction.removeTask(id));
    } catch (error) {
      console.log(error);
    }
    dispatch(uiactions.setLoader(false))

  };

  const setComplete = async (id, value) => {
    dispatch(uiactions.setLoader(true))

    try {
      const response = await fetch("/api/set-completed", {
        method: "POST",
        body: JSON.stringify({
          id,
          value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("setcomplete response", response);
      const data = await response.json();
      console.log(`set completed to ${value}`);
      dispatch(todoAction.setCompleted({ id, value }));
    } catch (error) {
      console.log(error);
    }
    dispatch(uiactions.setLoader(false))

  };

  useEffect(() => {
    dispatch(todoAction.getAll(props.tasks));
  }, []);

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <h1 className="text-2xl m-5 ml-0">Completed Tasks</h1>
        <div className="w-[290px]"></div>
        {todo.todoList.length !== 0 ? (
          todo.todoList.map((task) => {
            const { name, date, status, _id } = task;
            if (status === "complete") {
              return (
                <ListItem
                  key={_id}
                  secondaryAction={
                    <>
                      <IconButton
                        onClick={() => setComplete(_id, "incomplete")}
                        edge="end"
                      >
                        <RemoveCircleIcon color="error" />
                      </IconButton>
                      <IconButton onClick={() => deleteHandler(_id)} edge="end">
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                  disablePadding
                >
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <DoneIcon color="success" />
                    </ListItemIcon>
                    <ListItemText id={name} primary={`${name}`} />
                  </ListItemButton>
                </ListItem>
              );
            }
          })
        ) : (
          <p>Completed Tasks will be visible here</p>
        )}
      </List>
    </div>
  );
};

export async function getStaticProps() {
  const uri =
    "mongodb+srv://user:user@cluster0.z25nbll.mongodb.net/ToDoTasks?retryWrites=true&w=majority&appName=cluster0";
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const collection = await db.collection("tasks").find();

  let arr = [];
  await collection.forEach((task) => {
    task._id = task._id.toString();
    arr.push(task);
  });
  console.log("getstaticprops", arr);
  client.close();

  return {
    props: {
      tasks: arr,
    },
    revalidate: 10,
  };
}

export default CompletedTasks;
