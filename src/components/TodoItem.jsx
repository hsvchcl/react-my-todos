import "../styles/style.css";
import { Card, Spacer, Checkbox, Button } from "@geist-ui/react";
import { Trash } from "@geist-ui/icons";
const TodoItem = ({ task, onComplete, isChecked, deleteTask }) => {
  return (
    <>
      <Card hoverable draggable={true}>
        <div className="wrapper">
          <div className="box">
            <Checkbox
              checked={task.completed}
              scale={1.5}
              onChange={onComplete}
            >
              {" "}
              <span className={isChecked ? "checked" : "normal"}>
                {task.taskName} -{" "}
                <i style={{ color: "lightgray" }}>{task.taskDescription}</i>
              </span>
            </Checkbox>
          </div>
          <div className="box" style={{ textAlign: "end" }}>
            <Button
              iconRight={<Trash />}
              type="error"
              ghost
              auto
              scale={2 / 3}
              onClick={() => deleteTask(task)}
            />
          </div>
        </div>
      </Card>
      <Spacer h={1} />
    </>
  );
};

export { TodoItem };
