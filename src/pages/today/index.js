

import ToDoForm from "@/components/ToDoForm/ToDoForm";
import ToDoDisplay from "@/components/ToDoDisplay/ToDoDisplay";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "@/store/todoSlice";
import { uiactions } from "@/store/uiSlice";

export default function Today(props) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todoList);
  const loading=useSelector(state=>state.ui.loader)

  const submitHandler = async (e) => {
    dispatch(uiactions.setLoader(true))

    e.preventDefault();
    const todoTask = {
      name: e.target.todotask.value,
      date: new Date().toString(),
      status: "incomplete",
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
    dispatch(uiactions.setLoader(false))

  };

  const deleteHandler = async (id) => {
    dispatch(uiactions.setLoader(true))
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
    dispatch(uiactions.setLoader(false))

  };



  return (
    <main>
      <ToDoForm submit={submitHandler} />
      <ToDoDisplay deleter={deleteHandler} setComplete={setComplete} />
    </main>
  );
}



