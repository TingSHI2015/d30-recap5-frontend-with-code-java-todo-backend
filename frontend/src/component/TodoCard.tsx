import {Todo} from "../type/Todo.ts";
import './TodoCard.css'
import axios from "axios";

type TodoCardProps = {
    todo: Todo,
    onTodoItemChange:()=>void,
}


export default function TodoCard(props: TodoCardProps){

    const deleteThisItem = ()=>{
        axios.delete("api/todo/" + props.todo.id)
            .then(props.onTodoItemChange)
            .catch(error => console.log(error))
            .finally(()=>console.log("Finally-Delete"))
    }


    return(
        <div className="todo-card">
            {
                props.todo.description
            }
            <button onClick={deleteThisItem}>🚮</button>
        </div>
    )
}