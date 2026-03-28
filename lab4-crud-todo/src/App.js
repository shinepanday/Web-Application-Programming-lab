import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  // add new task
  const addTask = () => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      title: text,
      done: false,
      editMode: false
    };

    setTasks([...tasks, newTask]);
    setText("");
  };

  // toggle complete
  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // edit + save
  const editTask = (id, value, toggle = false) => {
    setTasks(tasks.map(t =>
      t.id === id
        ? {
            ...t,
            title: value,
            editMode: toggle ? !t.editMode : t.editMode
          }
        : t
    ));
  };

  return (
    <div className="app">
      <h2>Task Manager</h2>

      <TaskInput
        value={text}
        onChange={setText}
        onAdd={addTask}
      />

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;