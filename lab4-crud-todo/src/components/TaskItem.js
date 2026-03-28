import React from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="task-item">

      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />

      {task.editMode ? (
        <input
          type="text"
          value={task.title}
          onChange={(e) => onEdit(task.id, e.target.value)}
        />
      ) : (
        <span className={task.done ? "completed" : ""}>
          {task.title}
        </span>
      )}

      <div className="actions">
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onEdit(task.id, task.title, true)}>
          {task.editMode ? "Save" : "Edit"}
        </button>
      </div>

    </div>
  );
}

export default TaskItem;