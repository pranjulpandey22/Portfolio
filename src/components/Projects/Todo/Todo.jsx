import "./Todo.css";
import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const handleClick = () => {
    const items = {
      id: Date.now(),
      name: input.trim(),
      completed: false,
    };
    if (input) {
      setTodo((prev) => [...prev, items]);
      // setTodo([...todo,items]) another way
      setInput("");
    } else {
      return null;
    }
  };

  const handleDel = (id) => {
    const deleteItem = todo.filter((ele) => {
      return ele.id !== id;
    });
    setTodo(deleteItem);
  };
  const handleCompleteToggle = (id) => {
    setTodo(
      todo.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            completed: !ele.completed,
          };
        }
        return ele;
      }),
    );
  };

  return (
    <div>
     <h1>Create TO Do List</h1>
      <div className="center">
        <input
          type="text"
          value={input}
          placeholder="Enter To Do Items......"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonADD" onClick={handleClick}>
          Add
        </button>
        <ul className="hello">
          {todo.map((ele) => {
            return (
              <>
                <li key={ele.id}>
                  <input
                    type="checkbox"
                    checked={ele.completed}
                    onChange={() => handleCompleteToggle(ele.id)}
                  />
                  <span className={ele.completed ? "linethrough" : ""}>
                    {ele.name}
                  </span>
                  <button onClick={() => handleDel(ele.id)}>Delete</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
