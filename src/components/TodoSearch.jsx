import { Input } from "@geist-ui/react";
const TodoSearch = ({ searchValue, setSearchValue }) => {

  const searchTask = ({ target }) => {
    setSearchValue(target.value);
  };
  return (
    <Input
      scale={4 / 3}
      width="100%"
      placeholder="Search task"
      onChange={searchTask}
      value={searchValue}
    />
  );
};

export { TodoSearch };
