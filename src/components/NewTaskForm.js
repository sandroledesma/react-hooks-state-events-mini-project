import React from "react";
import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
      const newTask = {
          text: text, 
          category: category,
        };
        onTaskFormSubmit(newTask);
        setText("");
        setCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {/* render <option> elements for each category here */}
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
