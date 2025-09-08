import React, { useCallback } from 'react';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { TodosLoading } from '../TodosLoading/index.js';
import { TodosError } from '../TodosError/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { Modal } from '../Modal/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { TodoContext } from '../TodoContext/index.js';

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './app.css';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  const particlesInit = useCallback(async (engine) => {
    console.log("Particles engine:", engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container:", container);
  }, []);

  return (
    <>
      {/* Fondo interactivo con archivo JSON */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        url="/particles.json"  // 👈 cargamos el JSON externo
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      />

      {/* Tu app encima */}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
