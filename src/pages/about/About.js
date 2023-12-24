import React, { useState } from "react";
import "./About.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/todosSlice";
import ItemTodo from "./ItemTodo";

function About() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleTodo = () => {
    if (title.trim() === !"") {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div className="about">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleTodo} className="addBtn">
        Add
      </button>
      <ItemTodo />
    </div>
  );
}

export default About;
