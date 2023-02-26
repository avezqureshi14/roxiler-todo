import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTodoData } from "../json/dummyjson";

const { Meta } = Card;

const UserDetails = () => {
  const todos = useSelector((state) => state.todos);
  const { id } = useParams();
  const userTodo = getTodoData(id);

  console.log(id);

  return (
    <div className="cards">
      <Card style={{ width: "50%", margin: "0 auto" }}>
        <Meta title={userTodo.todo} description={userTodo.completed ? "Status : Completed" : "Status : Not Completed"} />
        <div style={{ marginTop: "16px" }}>
          <p>Todo ID: {userTodo.id}</p>
          <p>User ID: {userTodo.userId}</p>
          <p>Name: {userTodo.name}</p>
          <p>Email: {userTodo.email}</p>
        </div>
      </Card>
    </div>
  );
};

export default UserDetails;
