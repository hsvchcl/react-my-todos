import { useState, useEffect } from "react";
import { Button, Modal, Input, Textarea, Spacer } from "@geist-ui/react";

const TodoButtonAdd = ({ setNewTask, state, setModalState, form, setForm }) => {
  const handler = () => setModalState(true);
  const [disabledBtn, setDisabeBtn] = useState(true);

  const closeHandler = (event) => {
    setModalState(false);
  };

  const taskName = (value) => {
    setForm({
      taskName: value,
      taskDescription: form.taskDescription,
      id: Math.random(),
    });
  };

  const taskDescription = (value) => {
    setForm({ taskName: form.taskName, taskDescription: value, id: form.id });
  };

  useEffect(() => {
    if (form.taskName && form.taskDescription) {
      setDisabeBtn(false);
    } else {
      setDisabeBtn(true);
    }
  }, [form?.taskName, form?.taskDescription]);

  return (
    <>
      <Button
        width="100%"
        height={1.5}
        onClick={handler}
        shadow
        type="secondary"
      >
        Agregar nueva tarea
      </Button>
      <Modal visible={state} onClose={closeHandler}>
        <Modal.Title>Nueva Tarea</Modal.Title>
        <Modal.Subtitle>🫢</Modal.Subtitle>
        <Modal.Content>
          <Input
            scale={4 / 3}
            placeholder="Título"
            onChange={(e) => taskName(e.target.value)}
            width="100%"
          />
          <Spacer h={1} />
          <Textarea
            scale={4 / 3}
            placeholder="Descripción"
            onChange={(e) => taskDescription(e.target.value)}
            width="100%"
          />
        </Modal.Content>
        <Modal.Action passive onClick={() => setModalState(false)}>
          Cancelar
        </Modal.Action>
        <Modal.Action disabled={disabledBtn} onClick={() => setNewTask(form)}>
          Guardar
        </Modal.Action>
      </Modal>
    </>
  );
};

export { TodoButtonAdd };
