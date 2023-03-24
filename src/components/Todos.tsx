import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Button, IconButton, TextField } from "@mui/material";
import { KeyboardReturn } from "@mui/icons-material";
import { uniqueId } from "lodash";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  .new-todo {
    display: flex;
  }

  .todos-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

interface ITodo {
  uniqId: string;
  todo: string;
}

export const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        "https://api.render.com/deploy/srv-cgcch5pmbg55nqil50o0?key=I7zpxB8o6Vg"
      )
        .then((response) => console.log(response))
        .catch((error) => console.error("---", error));
    };
    fetchData();
  }, []);

  const addNewTodo = useCallback((todo: string) => {
    setTodos((prev) => [...prev, { uniqId: uniqueId(), todo }]);
    setNewTodo("");
  }, []);

  return (
    <Wrapper>
      <div className="new-todo">
        <TextField
          autoComplete="off"
          className="form-field"
          variant="outlined"
          id="new-todo"
          label="Write new todo..."
          value={newTodo}
          onChange={(e) => {
            console.log("---", e.target.value);
            setNewTodo(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter" && newTodo) {
              addNewTodo(newTodo);
            }
          }}
        />
        <Button
          size="large"
          color="primary"
          onClick={() => {
            if (newTodo) {
              addNewTodo(newTodo);
            }
          }}
        >
          <KeyboardReturn />
        </Button>
      </div>
      <div className="todos-wrapper">
        {todos.map((todo) => (
          <div key={todo.uniqId} className="todo">
            {todo.todo}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
