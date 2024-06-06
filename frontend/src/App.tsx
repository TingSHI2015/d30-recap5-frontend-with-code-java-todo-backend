import './App.css'
import {Todo} from "./type/Todo.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import TodoColumn from "./component/TodoColumn.tsx";
import {allPossibleTodos} from "./type/TodoStatus.ts";



function App() {

    //const [todos, setTodos] = useState<Todo[]>([])

    //if initial state is "undefined", then return "loading..."
    const [todos, setTodos] = useState<Todo[]>()

    const fetchTodos = ()=>{
        axios.get("api/todo")
            .then((response) => {setTodos(response.data)})
            .catch((error)=>{console.log(error)})
            .finally(() =>{console.log("finally-get")})
    }

    //all "react Hook" must be before the "return"!!!!
    useEffect(() => {
        fetchTodos()
    }, []);


    //all "react Hook" must be before the "return"!!!!
    if(!todos){
        return ("Loading...")
    }


  return (
    <>
        <div className="page">
            <h1>TODOs</h1>

            {
                allPossibleTodos.map((status) => {
                    const filteredTodos = todos.filter(todo => todo.status === status )
                    return <TodoColumn status={status} todos={filteredTodos} key={status} onTodoItemChange={fetchTodos} />
                })
            }
        </div>

    </>
  )

}

export default App
