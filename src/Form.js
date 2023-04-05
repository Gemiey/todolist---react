import React from 'react'
import { v4 as uuidv4} from "uuid";

const Form = ( {input, setInput,todos,setTodos} ) => {
 
  const onInputChange = (event) =>{
    setInput(event.target.value);
  }

  const onFormSubmit = (event) =>{
    event.preventDefault();
    setTodos([...todos, {id: uuidv4(), title:input, completed:false}] );
    setInput("");
  }

  return (
    <div className='todo-form'>
    
    <form  onSubmit={onFormSubmit}>
      <input type = "text" placeholder="Enter todo" required value = {input} onChange={onInputChange}></input>
        
    <button type = "submit">Add</button>
    </form>
    
    
    </div>
  )
}

export default Form