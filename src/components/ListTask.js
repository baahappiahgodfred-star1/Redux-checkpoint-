import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { setFilter } from "../redux/actions";

function ListTask() {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filtered = tasks.filter((t) => {
    if (filter === "done") return t.isDone;
    if (filter === "not") return !t.isDone;
    return true;
  });

  return (
    <>
      <div className="filters">
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("done"))}>Done</button>
        <button onClick={() => dispatch(setFilter("not"))}>Not Done</button>
      </div>

      {filtered.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
}

export default ListTask;