import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext'

function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

    return (
      
  completedTodos === totalTodos 

      ?<h1 className='TodoCounter' > felicidades haz completado todas las tareas</h1>  // aqui usamos operador ternario 


     :<h1 className='TodoCounter'>
       Haz completado  <span>{completedTodos} </span> de <span>{totalTodos}</span>  todos</h1>
    );
  }

  export {TodoCounter};
