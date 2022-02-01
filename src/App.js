import "./App.css";
import { useEffect, useState } from "react";
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
  const [counters, setCounters] = useState({ totalTask: 0, completedTask: 0 });
  const [form, setForm] = useState({
    taskName: null,
    taskDescription: null,
    id: 0,
  });

  useEffect(() => {
    const completedTask = state.task.filter((e) => !!e.completed).length;
    const totalTask = state.task.length;
    setCounters({ completedTask, totalTask });
  }, [state.task]);

  let filterTodos;
  if (searchValue) {
    filterTodos = state.task.filter((todo) =>
      todo.taskName.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else {
    filterTodos = state.task;
  }

  const onComplete = (check, element) => {
    console.log(element, check);
    const idx = filterTodos.map((x) => x.id).indexOf(element);

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
        completeTodoCount={counters.completedTask}
        allTodosCount={counters.totalTask}
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
              onComplete={(target) => onComplete(target, element.id)}
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
