import React, { useEffect } from "react";
// https://dummyjson.com/todos
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../redux/actions/todoActions";
import TodoTable from "./TodoTable";
import { todoArray } from "../json/dummyjson";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const fetchTodos = async () => {
    dispatch(setTodos(todoArray));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);
  return (
    <>
      <div className="tableContainer">
        <TodoTable />
      </div>
    </>
  );
};

export default TodoList;
