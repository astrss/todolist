import React, {useState, createContext} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([])

  const value = {
    todos: todos,
    setTodos: setTodos,
  }

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}
