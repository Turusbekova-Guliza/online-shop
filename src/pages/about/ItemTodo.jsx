import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "../../redux/todos/todosSlice";

function ItemTodo() {
  const todos = useSelector((state) => state.todos.todo);

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleCompleted({ id: id }))
  }

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <input onChange={() => handleToggle(item.id)} type="checkbox" value={item.completed} />
          {item.text}
          <button onClick={() => handleDelete(item.id)} className="addBtn">
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemTodo;
