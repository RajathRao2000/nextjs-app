import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ToDoForm from "@/components/ToDoForm/ToDoForm";
import ToDoDisplay from "@/components/ToDoDisplay/ToDoDisplay";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "@/store/todoSlice";
import { MongoClient } from "mongodb";
import { useEffect } from "react";

export default function Home(props) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todoList);

  const submitHandler = async (e) => {
    e.preventDefault();
    const todoTask = {
      name: e.target.todotask.value,
      date: new Date().toString(),
      completed: false,
    };
    console.log(todoTask);
    const response = await fetch("/api/post-tasks", {
      method: "POST",
      body: JSON.stringify(todoTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data, "data from post");
    if (!data.error) {
      dispatch(todoAction.addTask({ ...todoTask, id: data.id }));
      e.target.todotask.value=""
    }
  };

  const deleteHandler = async (id) => {
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
  };

  const setComplete = async (id, value) => {
    try {
      const response =await fetch("/api/set-completed", {
        method: "POST",
        body: JSON.stringify({
          id,
          value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("setcomplete response",response)
      const data = await response.json();
      console.log(`set completed to ${value}`);
      dispatch(todoAction.setCompleted({id,value}));

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(todoAction.getAll(props.tasks));
  }, []);

  return (
    <main>
      <ToDoForm submit={submitHandler} />
      <ToDoDisplay deleter={deleteHandler} setComplete={setComplete} />
    </main>
  );
}

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
  console.log("getstaticprops",arr)
  client.close();

  return {
    props: {
      tasks: arr,
    },
    revalidate: 10,
  };
}
