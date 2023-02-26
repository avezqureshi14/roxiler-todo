import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, Button, Input, Spin } from "antd";
import { Link } from "react-router-dom";
const TodoTable = () => {
  
  const [loading, setLoading] = useState(true);
  const allTodos = useSelector((state) => state?.allTodos?.todos);
  const [data, setData] = useState(allTodos);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    setLoading(false);
    if (allTodos) {
      const filteredData = allTodos.filter((item) =>
        item.todo.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredData);
    }
  }, [allTodos, searchText]);

  const handleSortById = () => {
    const sortedData = [...data].sort((a, b) => a.id - b.id);
    setSortOrder("asc");
    setData(sortedData);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id", sorter: (a, b) => a.id - b.id },
    { title: "Todo", dataIndex: "todo", key: "todo" },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
      render: (completed) => (completed ? "Yes" : "No"),
    },
    {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <Link to={`/user/${record.id}`}>
        <Button type="primary">View User</Button>
      </Link>
    ),
  },
  ];

  return (
    <>
    <div className="search-bar">
    <Input
    placeholder="Search Todo"
    allowClear
    value={searchText}
    onChange={handleSearch}
    />
    </div>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={filteredData.length ? filteredData : data}
          pagination={{ pageSize: 8 }}
        />
      )}
    </>
  );
};

export default TodoTable;
