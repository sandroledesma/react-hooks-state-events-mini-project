import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({ tasks}) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDelete = (text) => {
    setTaskList(taskList.filter((task) => task.text !== text));
  };

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList.map((task) => (
        <Task 
        key={task.id} 
        text={task.text} 
        category={task.category} 
        onDelete={() => handleDelete(task.text)}/>
      ))}
    </div>
  );
}

export default TaskList;
