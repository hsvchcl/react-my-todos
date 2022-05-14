export const saveNewTask = (object) => {
  try {
    localStorage.setItem("ls_task", JSON.stringify(object));
    return true;
  } catch (error) {
    console.error(error.message);
    return error.messsage;
  }
};

export const getAllTask = () => {
  try {
    return JSON.parse(localStorage.getItem("ls_task"));
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};
