import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";

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
          id_v4: uuidv4(),
          title: titleProp.trim(),
          description: descriptionProp.trim(),
          active: true,
          completed: true,
        },
      ];
    });
  };

  const completedTask = (id) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTaskList(updatedTasks);
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
                      completed={task.completed}
                      handleClick={handleClick}
                      completedTask={completedTask}
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
