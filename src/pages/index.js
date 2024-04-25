import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Today from "./today";
import { useDispatch } from "react-redux";
import { todoAction } from "@/store/todoSlice";
import { MongoClient } from "mongodb";
import { useEffect } from "react";
import Link from "next/link";

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoAction.getAll(props.tasks));
  }, []);
  return <Link href="/today">Go to todo list</Link>;
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
  console.log("getstaticprops", arr);
  client.close();

  return {
    props: {
      tasks: arr,
    },
    revalidate: 10,
  };
}
