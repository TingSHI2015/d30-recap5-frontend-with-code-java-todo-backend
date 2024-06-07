import {Todo} from "../type/Todo.ts";
import './TodoCard.css'
import axios from "axios";
import {ChangeEvent, useState} from "react";

type TodoCardProps = {
    todo: Todo,
    onTodoItemChange:()=>void,
}


export default function TodoCard(props: TodoCardProps){

    const [description, setDescription] = useState<string>(props.todo.description)

    const deleteThisItem = ()=>{
        axios.delete("api/todo/" + props.todo.id)
            .then(props.onTodoItemChange)
            .catch(error => console.log(error))
            .finally(()=>console.log("Finally-Delete"))
    }

    const changeText = (event:ChangeEvent<HTMLInputElement>)=>{
        const newDescription = event.target.value
        setDescription(newDescription)
        axios.put("api/todo/" + props.todo.id, {
            id: props.todo.id,
            description:newDescription,
            status: props.todo.status,
            } as Todo)
            .then(props.onTodoItemChange)
            .catch(error => console.log(error))
            .finally(()=>"Finally-Put")
    }


    return(
        <div className="todo-card">
            <input value={description} onInput={changeText}/>
            <button onClick={deleteThisItem}>🚮</button>
        </div>
    )
}