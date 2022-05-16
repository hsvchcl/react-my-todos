import { Badge } from "@geist-ui/react";

const Message = (message, count = null) => {
  return (
    <>
      <h2>
        {message} {count && <Badge style={{ marginLeft: 10 }}>{count}</Badge>}
      </h2>
    </>
  );
};

const MultipleMessage = (messageOne, countOne, messageTwo, countTwo) => {
  return (
    <>
      <h2>
        {messageOne}
        {countOne && <Badge style={{ marginLeft: 10 }}>{countOne}</Badge>}{" "}
        {messageTwo}
        {countTwo && <Badge style={{ marginLeft: 10 }}>{countTwo}</Badge>}
      </h2>
    </>
  );
};

const TodoCounter = ({ completeTodoCount, allTodosCount }) => {
  return (
    <h2>
      {completeTodoCount > 0 &&
        allTodosCount > 0 && completeTodoCount !== allTodosCount &&
        MultipleMessage(
          "👏🏻 Haz completado",
          completeTodoCount,
          "tarea(s) de",
          allTodosCount
        )}
      {completeTodoCount === 0 &&
        allTodosCount === 0 &&
        Message(`😬 Registra tu primera tarea!`)}

      {completeTodoCount === 0 &&
        allTodosCount > 0 &&
        Message("👀 Tareas pendientes:", allTodosCount)}
      {completeTodoCount === allTodosCount && completeTodoCount > 0 &&
        Message("🎉 Todas las tareas completadas!")}
    </h2>
  );
};

export { TodoCounter };
