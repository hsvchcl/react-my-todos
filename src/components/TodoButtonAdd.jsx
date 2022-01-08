import { useState } from "react";
import { Button, Modal } from "@geist-ui/react";

const TodoButtonAdd = () => {
  const [state, setState] = useState(false);
  const handler = () => setState(true);
  const closeHandler = (event) => {
    setState(false);
    console.log("closed");
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
          <p>Some content contained within the modal.</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => setState(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action>Add Task</Modal.Action>
      </Modal>
    </>
  );
};

export { TodoButtonAdd };
