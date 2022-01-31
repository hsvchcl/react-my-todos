const TodoCounter = ({ completeTodoCount, allTodosCount }) => (
  <h2>
    {completeTodoCount !== allTodosCount &&
      `${completeTodoCount} todos completed from ${allTodosCount} todos`}
    {completeTodoCount === allTodosCount &&
      `Haz completado todas las tareas pendientes.`}
  </h2>
);

export { TodoCounter };
