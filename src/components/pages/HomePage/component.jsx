import React, {useContext, useCallback, useState} from 'react';
import {DataContext} from '../../../store';
import {
  Container,
  Column,
  ColumnInput,
  Button,
  ColumnHeader,
  ColumnList,
  ColumnItemText,
  ColumnItem,
  ColumnItemCheckBox,
  ColumnContent,
} from './styles';

const HomePage = () => {
  const {todos, setTodos} = useContext(DataContext);
  const [todoText, setTodoText] = useState('');

  const addTodoText = useCallback((event) => {
    setTodoText(event.target.value)
  }, [setTodoText])

  const addTodo = useCallback(() => {
    if (todoText) {
      setTodos([...todos, {name: todoText, complete: false, id: Date.now()}])
      setTodoText('')
    }
  }, [setTodos, todoText, todos])

  const deleteTodo = useCallback((id) => () => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }, [setTodos, todos])

  const toggleCheckbox = useCallback((id) => () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          }
        }
        return todo
      })
    )
  },[setTodos, todos])

  return (
    <Container>
      <Column>
        <ColumnHeader>
          <ColumnInput value={todoText} onChange={addTodoText} />
          <Button onClick={addTodo}>
            Добавить
          </Button>
        </ColumnHeader>
        <ColumnList>
          {todos.map((todo) => (
            <ColumnItem key={todo.id}>
              <ColumnItemCheckBox onChange={toggleCheckbox(todo.id)} type='checkbox' />
              <ColumnContent>
                <ColumnItemText complete={todo.complete}>
                  {todo.name}
                </ColumnItemText>
                <Button onClick={deleteTodo(todo.id)}>
                  Удалить
                </Button>
              </ColumnContent>
            </ColumnItem>
          ))}
        </ColumnList>
      </Column>
    </Container>
  )
};

export default React.memo(HomePage);
