import React, { useState } from 'react';
import './TodoSearch.css'
import {TodoContext} from '../TodoContext'
function TodoSearch(){

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

  
      return (
      <div className="todo-search-container">
      <input
       className="todo-search-input" 
       placeholder="cortar cebolla"
       value={searchValue}
       onChange={(event) => {
      setSearchValue(event.target.value)
  
       
       }}
       
       />
    </div>
    );
  }

  export {TodoSearch};