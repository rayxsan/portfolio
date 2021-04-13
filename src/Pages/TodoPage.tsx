import React from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Todo from "../Components/State/Todo";

const StyledTodo = styled.div``;

const TodoPage = () => {
  return (
    <StyledTodo>
      <ContentBox title="Task list" text="Simple ToDo using mobX">
        <Todo />
      </ContentBox>
    </StyledTodo>
  );
};

export default TodoPage;
