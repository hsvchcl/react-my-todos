const TodoCounter = ({ completeTodoCount, allTodosCount }) => {
  return (
    <h2>
      {completeTodoCount > 0 &&
        allTodosCount > 0 &&
        `Haz completado ${completeTodoCount} tarea(s) de ${allTodosCount}`}
      {completeTodoCount === 0 && allTodosCount === 0 && `Ingresa tus tareas`}

      {completeTodoCount === 0 &&
        allTodosCount > 0 &&
        `Tareas ingresadas ${allTodosCount}`}
    </h2>
  );
};

export { TodoCounter };
