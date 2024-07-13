// CreateTodoButton.js
import React from 'react';


function CreateTodoButton({ setOpenModal }) {
  return (

    <div className='container_CreateTodoButton'>
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal(state => !state);
        //console.log('diste click'); // Verifica si se hace clic en el botón
      }}
    >
      <p>
      +

      </p>
    </button>
    </div>
  );
}

export { CreateTodoButton };
