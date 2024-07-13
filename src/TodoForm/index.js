import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const {
        addTodo,
        isAlreadyAdded,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');  // nuevo estado estado local
    const [repeatedElement, setRepeatedElement] = React.useState(null);

    const onSubmit = (e)=>{
        e.preventDefault();
        if (newTodoValue === ""){
            return;
        }

        const isAlreadyAdd = isAlreadyAdded(newTodoValue);
        if (isAlreadyAdd){
            const alert = <p className="alert--active">Ya existe este item</p>
            setRepeatedElement(alert);
            return;
        }
        
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    
    const onReset = (e)=>{
        e.preventDefault();
        setNewTodoValue("");
    }

    const onChange = (e)=>{
        setNewTodoValue(e.target.value);
    }

    const onClose = (e)=> {
        e.preventDefault();
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <button 
                className='button__close'
                onClick={onClose}
            >
            x 
            </button>
            <label htmlFor='newAddTodo'>ADD TO DO</label>
            {repeatedElement}
            <textarea
                className='textarea__modal' 
                id='newAddTodo' 
                name='newAddTodo' 
                placeholder='Write here'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='modal__div__button__container'>
                <button 
                    type="reset"
                    className='modal__div__button clean'
                    onClick={onReset}
                >CLEAN</button>
                <button 
                    type="submit"
                    className='modal__div__button'
                >SUBMIT</button>
            </div>
        </form>
    );
}

export { TodoForm };