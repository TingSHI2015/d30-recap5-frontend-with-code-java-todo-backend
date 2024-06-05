import './App.css'
import {Todo} from "./type/Todo.ts";
import TodoCard from "./component/TodoCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

function App() {

    //const [todos, setTodos] = useState<Todo[]>([])

    //if initial state is "undefined", then return "loading..."
    const [todos, setTodos] = useState<Todo[]>()

    //all "react Hook" must be before the "return"!!!!
    useEffect(() => {
        axios.get("api/todo")
            .then((response) => {setTodos(response.data)})
            .catch((error)=>{console.log(error)})
            .finally(() =>{console.log("finally-get")})
    }, []);


    //all "react Hook" must be before the "return"!!!!
    if(!todos){
        return ("Loading...")
    }


  return (
    <>
        <h1>TODOs</h1>
        {
            todos.map((todo) => <TodoCard todo={todo}  key={todo.id} />)
        }


    </>
  )

}

export default App
