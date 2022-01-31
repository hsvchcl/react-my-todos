import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoButtonAdd } from "./components/TodoButtonAdd";
import { Page, Spacer } from "@geist-ui/react";
import { useState } from "react";

function App() {
  const [state, setState] = useState({ task: [] });

  const addNewTask = (task) => {
    setState({ task: [...state.task, task] });
  };

  return (
    <Page>
      <TodoCounter count={state.task.length} />
      <Spacer h={2} />
      <TodoSearch />
      <Spacer h={2} />
      <TodoList>
        {state.task.map((element) => {
          return <TodoItem item={element.taskName} key={element.id} />;
        })}
      </TodoList>
      <Spacer h={2} />
      <TodoButtonAdd setNewTask={addNewTask} />
    </Page>
  );
}

export default App;
