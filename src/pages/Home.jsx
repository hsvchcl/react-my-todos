import { useEffect, useState } from "react";
import { Page, Spacer, useToasts } from "@geist-ui/react";

import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodoButtonAdd } from "../components/TodoButtonAdd";
import { getAllTask, saveNewTask } from "../services/localStorage";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [state, setState] = useState({ task: [] });
  const [modalState, setModalState] = useState(false);
  const [counters, setCounters] = useState({ totalTask: 0, completedTask: 0 });
  const [form, setForm] = useState({
    taskName: null,
    taskDescription: null,
    id: 0,
  });
  const [, setToast] = useToasts();

  useEffect(() => {
    const task = getAllTask();
    if (task) {
      setState(task);
    }
  }, []);

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

  // Mark a task complete
  const onComplete = (check, element) => {
    const idx = filterTodos.map((x) => x.id).indexOf(element);
    const newTodos = [...state.task];

    if (idx >= 0) newTodos[idx].completed = check.target.checked;

    const taskObject = { task: newTodos };

    setState(taskObject);
    saveNewTask(taskObject);
  };

  // Add a new task
  const addNewTask = (task) => {
    const taskObject = { task: [...state.task, task] };
    setState(taskObject);
    saveNewTask(taskObject);
    setModalState(false);

    setForm({
      taskName: null,
      taskDescription: null,
      id: 0,
    });

    setToast({
      text: `${task.taskName} se ha guardado! 👍🏻 `,
      type: "success",
    });
  };

  // Delete Task
  const deleteTask = (task) => {
    const idx = state.task.findIndex((task_) => task_.id === task.id);
    let taskCopy = state.task;
    taskCopy.splice(idx, 1);
    const taskCopyObject = { task: taskCopy };
    setState(taskCopyObject);
    const completedTask = state.task.filter((e) => !!e.completed).length;
    const totalTask = state.task.length;
    setCounters({ completedTask, totalTask });
    saveNewTask(taskCopyObject);
    setToast({ text: `${task.taskName}, eliminado 🙀`, type: "warning" });
  };

  return (
    <Page width="600px" dotBackdrop={true}>
      <TodoCounter
        completeTodoCount={counters.completedTask}
        allTodosCount={counters.totalTask}
      />
      <Spacer h={2} />
      {state.task.length > 0 && (
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      )}
      <Spacer h={2} />
      <TodoList>
        {filterTodos.map((task) => {
          return (
            <TodoItem
              task={task}
              key={task.id}
              onComplete={(target) => onComplete(target, task.id)}
              isChecked={task.completed}
              deleteTask={deleteTask}
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
};
