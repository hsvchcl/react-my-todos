import "./style.css";
import { Card, Spacer, Checkbox } from "@geist-ui/react";
import { useState } from "react";
const TodoItem = (props) => {
  const [state, setState] = useState({ check: false });

  const checkTask = ({ target }) => {
    setState({ check: target.checked });
  };

  return (
    <>
      <Card>
        <Checkbox checked={false} scale={1.5} onChange={checkTask}>
          {" "}
          <span className={state.check ? "checked" : "normal"}>
            {props.item}
          </span>
        </Checkbox>
      </Card>
      <Spacer h={1} />
    </>
  );
};

export { TodoItem };
