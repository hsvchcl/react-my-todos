import "./App.css";
import { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoButtonAdd } from "./components/TodoButtonAdd";
import { Page, Spacer } from "@geist-ui/react";
const defaultTodos = [
  { item: "acostar Noam", id: 1, completed: false },
  { item: "Tomar Once", id: 2, completed: false },
  { item: "Almorzar", id: 3, completed: false },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  const completeTodoCount = todos.filter((todo) => !!todo.completed).length;
  const allTodosCount = todos.length;

  let filterTodos;
  if (searchValue) {
    filterTodos = todos.filter((todo) =>
      todo.item.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else {
    filterTodos = todos;
  }

  const onComplete = (check, element) => {
    const idx = filterTodos.map((x) => x.item).indexOf(element);
    const newTodos = [...todos];
    if (idx >= 0) newTodos[idx].completed = check.target.checked;
    setTodos(newTodos);
  };

  return (
    <Page>
      <TodoCounter
        completeTodoCount={completeTodoCount}
        allTodosCount={allTodosCount}
      />
      <Spacer h={2} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Spacer h={2} />
      <TodoList>
        {filterTodos.map((element) => {
          return (
            <TodoItem
              item={element.item}
              key={element.id}
              onComplete={(target) => onComplete(target, element.item)}
            />
          );
        })}
      </TodoList>
      <Spacer h={2} />
      <TodoButtonAdd />
    </Page>
  );
}

export default App;
