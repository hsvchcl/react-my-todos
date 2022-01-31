import "./App.css";
import { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoButtonAdd } from "./components/TodoButtonAdd";
import { Page, Spacer } from "@geist-ui/react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [state, setState] = useState({ task: [] });
  const [modalState, setModalState] = useState(false);
  const [form, setForm] = useState({
    taskName: null,
    taskDescription: null,
    id: 0,
  });

  const completeTodoCount = state.task.filter(
    (todo) => todo.completed
  );

  console.log('completeTodoCount=>',completeTodoCount);

  const allTodosCount = state.task.length;

  let filterTodos;
  if (searchValue) {
    filterTodos = state.task.filter((todo) =>
      todo.item.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else {
    filterTodos = state.task;
    console.log(filterTodos);
  }

  const onComplete = (check, element) => {
    const idx = filterTodos.map((x) => x.item).indexOf(element);
    const newTodos = [...state.task];
    if (idx >= 0) newTodos[idx].completed = check.target.checked;
    setState({ task: newTodos });
  };

  const addNewTask = (task) => {
    setState({ task: [...state.task, task] });
    setModalState(false);
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
              item={element.taskName}
              key={element.id}
              onComplete={(target) => onComplete(target, element.item)}
            />
          );
        })}
      </TodoList>
      <Spacer h={2} />
      <TodoButtonAdd
        setNewTask={addNewTask}
        state={modalState}
        setModalState={setModalState}
        form={form}
        setForm={setForm}
      />
    </Page>
  );
}

export default App;
