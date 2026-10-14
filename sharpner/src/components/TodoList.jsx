import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const getDateTime = () => {
    // const date = new Date().toLocaleDateString();
    // const time = new Date().toLocaleTimeString();
    setDateTime(new Date());
  };
  useEffect(() => {
    const timer = setInterval(() => {
      // getDateTime()
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  let hours = dateTime.getHours();
  const min = dateTime.getMinutes();
  const sec = dateTime.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const format = (v) => (v < 10 ? `0${v}` : v);
  const addTodo = (e) => {
    if (!task.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: task,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };
  // console.log(todos);

  const deleteTodo = (id) => {
    const isConfirm = window.confirm("Are sure to delete this task");
    if (!isConfirm) return;
    const deletedTodo = todos.filter((el, t) => el.id !== id);
    setTodos(deletedTodo);
  };
  const editTask = (todo) => {
    setEditId(todo.id);
    setEditValue(todo.text);
    console.log(todo.text);
  };
  const saveEditTask = () => {
    if (!editValue.trim()) return;
    const updatedTodos = todos.map((t) =>
      t.id === editId ? { ...t, text: editValue } : t,
    );
    console.log(updatedTodos);

    setTodos(updatedTodos);
    setEditId(null);
    setEditValue("");
  };
  const updateUser = (index) => {
    const input = prompt("make some change", todos[index]);
    if (!input || !input.trim()) return;
    const update = [...todos];
    update[index] = input;
    setTodos(update);
  };
  return (
    <div className="border border-white rounded-md bg-white  max-w-5xl text-center mx-auto px-5">
      <h1 className="text-black text-2xl mt-4">Total Todos:{todos.length}</h1>
      <h1 className="text-white text-sm font-bold shadow-lg py-3 bg-blue-400 rounded-lg flex items-center justify-center gap-3">
        <span className="bg-red-400 px-3 text-center min-w-10 py-1 rounded-md ">
          {format(hours)}
        </span>
        : <span className="bg-red-400 px-3 text-center min-w-10 py-1 rounded-md ">
        {format(min)}</span>
        :
         <span className="bg-red-400 px-3 text-center min-w-10 py-1 rounded-md ">
          {format(sec)}
        </span>
       <span className="text-yellow-300 text-bold ml-2"> {ampm}</span>
      </h1>
      <div className="flex justify-between gap-4 w-full items-center min-h-24">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Enter todos here...."
          className="w-full outline-none py-2 px-3 text-black border-b border-yellow-500"
        />

        <button onClick={addTodo} className="py-1 px-3 rounded-sm ">
          Add
        </button>
      </div>
      <ul className="text-center w-full -mt-5 pl-6">
        {todos.map((list, index) => (
          <li
            className="flex justify-between items-center  mt-3 mb-4 list-disc "
            key={list.id}
          >
            {editId === list.id ? (
              <div className="flex gap-3 w-full">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full outline-none   text-black border-b border-blue-500"
                />
                <button className="px-2 py-1 rounded-sm" onClick={saveEditTask}>
                  Save
                </button>
              </div>
            ) : (
              <>
                <span className="text-black"> {list.text}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => deleteTodo(list.id)}
                    className="py-1 px-3 rounded-sm "
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => editTask(list)}
                    className="py-1 px-3 rounded-sm "
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
