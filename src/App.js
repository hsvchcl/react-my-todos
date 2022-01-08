import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoButtonAdd } from "./components/TodoButtonAdd";
import { Page, Spacer } from "@geist-ui/react";

function App() {
  const todos = [
    { item: "acostar Noam", id: 1 },
    { item: "Tomar Once", id: 2 },
    { item: "Almorzar", id: 3 },
  ];
  return (
    <Page>
      <TodoCounter />
      <Spacer h={2} />
      <TodoSearch />
      <Spacer h={2} />
      <TodoList>
        {todos.map((element) => {
          return <TodoItem item={element.item} key={element.id} />;
        })}
      </TodoList>
      <Spacer h={2} />
      <TodoButtonAdd />
    </Page>
  );
}

export default App;
