import { useState } from "react";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onAdd = (e) => {
    e.preventDefault();
    if (todo) {
      const newTodo = {
        todo,
        completed: false,
      };
      setTodoList((cur) => [...cur, newTodo]);
      setTodo("");
    }
  };
  const onDelete = (targetIndex) => {
    setTodoList((cur) => cur.filter((el, index) => index !== targetIndex));
  };
  console.log(todoList);
  return (
    <div id="todo">
      <h1>My Todos ({todoList.length})</h1>
      <form>
        <input
          type="text"
          id="todoInput"
          placeholder="Enter Todo"
          onChange={onChange}
          value={todo}
        ></input>
        <button style={{ display: "none" }} onClick={onAdd}></button>
      </form>
      <div id="todoListContainer">
        <ul id="todoList">
          {todoList.map((todoItem, index) => (
            <li key={index}>
              <span>{todoItem.todo}</span>
              <button onClick={() => onDelete(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
