import React from "react";
import Task from "./Task";
// import { useState } from "react";

function TaskList({ tasks, onDeleteTask }) {
  // const [taskList, setTaskList] = useState(tasks);

  // const handleDelete = (text) => {
  //   setTaskList(taskList.filter((task) => task.text !== text));
  // };

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task 
        key={task.text} 
        text={task.text} 
        category={task.category} 
        onDelete={() => onDeleteTask(task.text)}/>
      ))}
    </div>
  );
}

export default TaskList;
