import { Input } from "@geist-ui/react";
const TodoSearch = ({ searchValue, setSearchValue }) => {

  const searchTask = ({ target }) => {
    setSearchValue(target.value);
  };
  return (
    <Input
      scale={4 / 3}
      clearable
      width="100%"
      placeholder="Buscar tarea"
      onChange={searchTask}
      value={searchValue}
    />
  );
};

export { TodoSearch };
