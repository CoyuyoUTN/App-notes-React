import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);

  const handleClick = (id) => {
    setTaskList((prev) => {
      const element = prev.find((task) => task.id === id);
      element.active = false;

      return [...prev];
    });
  };

  const handleDats = (titleProp, descriptionProp) => {
    setTaskList((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          title: titleProp,
          description: descriptionProp,
          active: true,
        },
      ];
    });
  };

  return (
    <div className="App-container">
      <TaskForm handleDats={handleDats} />
      <div className="cards-container">
        {taskList.length > 0
          ? taskList
              .filter((task) => task.active)
              .map((task, index) => {
                return (
                  <div key={index}>
                    <Task
                      id={task.id}
                      title={task.title}
                      description={task.description}
                      active={task.active}
                      handleClick={handleClick}
                    />
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default TaskList;
