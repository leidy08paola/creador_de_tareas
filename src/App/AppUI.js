import React from 'react';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import {TodosLoading} from '../TodosLoading/index.js'
import {TodosError} from '../TodosError/index.js'
import {EmptyTodos} from '../EmptyTodos/index.js'
import {CreateTodoButton } from '../CreateTodoButton/index.js'
import { Modal } from '../Modal/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { TodoContext } from '../TodoContext/index.js';


function AppUI () { 
  const {
             loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo,
              openModal,
              setOpenModal,
  } = React.useContext(TodoContext)

    return (
        <>
          <TodoCounter  />
          <TodoSearch/>
          
              <TodoList>

                {loading && < TodosLoading/>}
                {error && < TodosError/>}
                {(! loading && searchedTodos.length === 0) && <EmptyTodos/> }


                { searchedTodos.map(todo => (
                   <TodoItem 
                   key={todo.text} 
                   text={todo.text} 
                   completed={todo.completed}
                   onComplete={()=> completeTodo(todo.
                   text)}
                   onDelete={() => deleteTodo(todo.
                    text)}
/>
))}
</TodoList>
         
<CreateTodoButton
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal
                    setOpenModal={setOpenModal}
                >
                    <TodoForm/>
                </Modal>
           )}
        </ >
      );

    
}

export { AppUI} ;