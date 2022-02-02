const TodoList = (props) => {
  return (
    <section style={{ maxHeight: "50vh", overflowY: "auto" }}>
      {props.children}
    </section>
  );
};

export { TodoList };
