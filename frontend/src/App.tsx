import './App.css'
import {Todo} from "./type/Todo.ts";
import TodoCard from "./component/TodoCard.tsx";

function App() {

    //---data for the test, before connect to the backend!---
    const todos: Todo[] = [
        {
            "id": "Id1",
            "description": "Cook dinner",
            "status": "OPEN"
        },
        {
            "id": "Id2",
            "description": "House Cleaning",
            "status": "IN_PROGRESS"
        },
    ]


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
