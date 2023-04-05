import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const TodosList = ( {todos,setTodos} ) => {
    
    const Delete = ( {id} ) => {
            setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
    <div className='todoslist'>
        {todos.map((todo) => (
            <ul key = {todo.id}>
                <input className='todo-item' type="text" value={todo.title} ></input>
                
                <button className='delete'><FontAwesomeIcon icon={faTrash} onClick={() => Delete(todo)} /></button>
                
            </ul>
        )
            
        )}
    </div>
  )
}

export default TodosList