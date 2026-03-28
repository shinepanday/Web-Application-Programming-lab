import React from "react";

function TaskInput({ value, onChange, onAdd }) {
  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Add a task..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default TaskInput;