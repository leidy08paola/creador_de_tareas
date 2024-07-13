
import './TodoList.css'

function TodoList({children}
){
    return (

      <div className="todo-list-container">
     <ul className="todo-list">
        {children}
     </ul>
     </div>
    );
  }
  export {TodoList};