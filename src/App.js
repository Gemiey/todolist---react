import './App.css';
import React,{useState} from 'react'
import Form from './Form';
import TodosList from './TodosList';
import Search from './Search';

function App() {

const [input,setInput] = useState(""); // tracking the input by the user
const [todos,setTodos] = useState([]); // tracking all the todos added, is set initially as empty array
const [query,setQuery] = useState(""); // tracking search input

  return (
    <div >
      <header className="todo-wrapper">      
      
      <Search query={query} todos={todos} setTodos={setTodos} setQuery={setQuery}></Search>

        To do list
        <Form
        input = {input}
        setInput = {setInput}
        todos = {todos}
        setTodos = {setTodos}
        />
        <TodosList todos = {todos} setTodos={setTodos}/>
      </header>
      
    </div>
  );
}

export default App;
