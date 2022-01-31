import { useState } from "react";
import { Button, Modal, Input, Textarea, Spacer } from "@geist-ui/react";

const TodoButtonAdd = ({ setNewTask }) => {
  const [state, setState] = useState(false);
  const [form, setForm] = useState({
    taskName: null,
    taskDescription: null,
    id: Math.random(),
  });

  const handler = () => setState(true);
  const closeHandler = (event) => {
    setState(false);
    console.log("closed");
  };

  const taskName = (value) => {
    setForm({
      taskName: value,
      taskDescription: form.taskDescription,
      id: form.id,
    });
  };

  const taskDescription = (value) => {
    setForm({ taskName: form.taskName, taskDescription: value, id: form.id });
  };

  return (
    <>
      <Button width="100%" onClick={handler}>
        Add New Task
      </Button>
      <Modal visible={state} onClose={closeHandler}>
        <Modal.Title>Add new task</Modal.Title>
        <Modal.Subtitle>Type a new</Modal.Subtitle>
        <Modal.Content>
          <Input
            scale={4 / 3}
            placeholder="Task Name"
            onChange={(e) => taskName(e.target.value)}
            width="100%"
          />
          <Spacer h={1} />
          <Textarea
            scale={4 / 3}
            placeholder="Please enter a task description."
            onChange={(e) => taskDescription(e.target.value)}
            width="100%"
          />
        </Modal.Content>
        <Modal.Action passive onClick={() => setState(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action onClick={() => setNewTask(form)}>Add Task</Modal.Action>
      </Modal>
    </>
  );
};

export { TodoButtonAdd };
