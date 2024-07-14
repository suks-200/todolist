import { useState } from "react";
import { useEffect } from "react";

const Todo = () => {

    const [todos, setTodos] = useState([]);


 let [todo,settodo]=useState('');
 const addTodo = () => {
    setTodos([...todos, todo]);
    settodo("")
};

let deleteitem=(text)=>{
 let newtodos =todos.filter((todo)=>{
    return todo !== text;
 })
setTodos(newtodos)
}

    return ( 

<div>
<div>
    <h1>Enter your new todo</h1>
    <label>Enter your todo </label>
    <input value={todo}  onChange={(e)=>{settodo(e.target.value)}} ></input>
    <button onClick={addTodo}>Add</button>
    </div>

    <div>
        <h1>Your Todo List</h1>
        <ul className="todo">
            {todos.map((todo,index)=>(
                <div>
                    <li key={index}>{todo}</li>
                    <button onClick={()=>{
                        deleteitem(todo)
                    }}>Delete</button>
                </div>
            ))}
        </ul>

    </div>
</div>

     );
}
 
export default Todo;
