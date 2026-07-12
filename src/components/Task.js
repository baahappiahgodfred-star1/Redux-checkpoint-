import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/actions";

function Task({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.description);

  return (
    <div className={`task ${task.isDone ? "done" : ""}`}>
      {editing ? (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(editTask(task.id, text));
              setEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{task.description}</h3>

          <div className="task-buttons">
            <button onClick={() => dispatch(toggleTask(task.id))}>
              {task.isDone ? "Undo" : "Done"}
            </button>

            <button onClick={() => setEditing(true)}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;