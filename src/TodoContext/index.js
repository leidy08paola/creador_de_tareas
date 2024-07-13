import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState(''); // Es una función el estado se consume y se actualiza
  
  const [openModal, setOpenModal] = React.useState(false);
  
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

 

  React.useEffect(() => {
  
  }, [totalTodos]);



  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
  const isAlreadyAdded = (text) => {
    return todos.some(todo => todo.text === text);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => { // Texto para identificar cuál todo queremos borrar
    const newTodos = [...todos];  // Crear nueva lista de todos
    const todoIndex = newTodos.findIndex( // Identificar cuál es el todo que queremos modificar
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1); // Accedemos por índice y método splice manipulación de array
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      isAlreadyAdded,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

// const defaultTodos = [
// {  text: 'cortar cebolla', completed: true },
// {  text: 'tomar el curso de introducción a JS', completed: false },
// {  text: 'llorar con la llorona', completed: false },
// {  text: 'bañarme', completed: false },
// {  text: 'usar estado derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1' ,  JSON.stringify(defaultTodos) );

// localStorage.removeItem('TODOS_V1');
