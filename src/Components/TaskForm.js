import React, { useState } from "react";

const TaskForm = ({ handleDats }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="center">
      <h1>New task</h1>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          if (!validation(title, description)) {
            setDescription("");
            setTitle("");
          } else {
            handleDats(title, description);
            setDescription("");
            setTitle("");
            ev.target.reset();
          }
        }}
      >
        <div className="inputbox">
          <input
            id="title"
            name="title"
            type="title"
            value={title}
            maxLength="15"
            onChange={(ev) => {
              setTitle(ev.target.value);
            }}
            autoComplete="off"
          />
          <span>Title</span>
        </div>
        <div className="inputbox">
          <input
            id="task"
            name="task"
            type="task"
            value={description}
            maxLength="50"
            onChange={(ev) => {
              setDescription(ev.target.value);
            }}
            autoComplete="off"
          />
          <span>Description</span>
        </div>
        <div className="inputbox">
          <input type="submit" value="Add +" />
        </div>
      </form>
    </div>
  );
};

const validation = (title, description) => {
  if (title.length === 0) {
    alert("No has escrito nada en el titulo");
    return false;
  }
  if (description.length === 0) {
    alert("No has escrito nada en la description");
    return false;
  }

  return true;
};

export default TaskForm;
