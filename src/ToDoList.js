import React from 'react';
import styled from 'styled-components';
import ToDoItem from './ToDoItem';
import { useRecoilValue } from 'recoil';
import { todosState } from './Todos';

const TodoList = () => {
  const todos = useRecoilValue(todosState);

  return (
    <Container>
      <ListContainer>
        {todos.map(todo => (
          <ToDoItem key={todo.id} data={todo} />
        ))}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default TodoList;
