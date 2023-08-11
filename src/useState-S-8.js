import React, { useState } from "react";

const Data = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: ""
  });
  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString()
    };

    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: ""
    });
  };
  const handleDelete = (id) => {
    let newTodos = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    setList(newTodos);
  };
  return (
    <div>
      <input
        type="text"
        name="message"
        id="message"
        placeholder="enter message here"
        value={message.text}
        onChange={changeMessage}
      />
      <button onClick={handleSubmit} type="submit">
        add
      </button>
      <hr />
      {list.length === 0 && <h4>There Is no Iteam In the list</h4>}
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Data;
