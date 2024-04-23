import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ToDoForm from "@/components/ToDoForm/ToDoForm";
import ToDoDisplay from "@/components/ToDoDisplay/ToDoDisplay";


export default function Home() {
  return (
    <main>
      <ToDoForm />
      <ToDoDisplay />
    </main>
  );
}
