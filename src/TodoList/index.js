import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext'; // Ajusta la ruta según tu proyecto
import { TodoItem } from '../TodoItem';       // Ajusta la ruta según tu proyecto
import './TodoList.css'

function TodoList() {
  // Obtener los todos y funciones desde el contexto
  const { searchedTodos, completeTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-list-container">
    <ul>
      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => {
            completeTodo(todo.text); // Llama a la función del contexto
            console.log('Completado:', todo.text); // Muestra en consola
          }}
          onDelete={() => {
            deleteTodo(todo.text);   // Llama a la función del contexto
            console.log('Eliminado:', todo.text); // Muestra en consola
          }}
        />
      ))}
    </ul>
    </div>
  );
}

export { TodoList };
