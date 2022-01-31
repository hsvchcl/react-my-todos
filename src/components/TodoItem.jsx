import "./style.css";
import { Card, Spacer, Checkbox } from "@geist-ui/react";
const TodoItem = (props) => {
  return (
    <>
      <Card>
        <Checkbox checked={false} scale={1.5} onChange={props.onComplete}>
          {" "}
          <span>{props.item}</span>
        </Checkbox>
      </Card>
      <Spacer h={1} />
    </>
  );
};

export { TodoItem };
