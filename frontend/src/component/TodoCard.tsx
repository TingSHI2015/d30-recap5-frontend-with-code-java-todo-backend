import {Todo} from "../type/Todo.ts";
import './TodoCard.css'
import axios from "axios";
import {ChangeEvent, useState} from "react";
import {TodoStatus} from "../type/TodoStatus.ts";

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
            ...props.todo,
            description:newDescription,
            } as Todo)
            .then(props.onTodoItemChange)
            .catch(error => console.log(error))
            .finally(()=>"Finally-Put")
    }

    const move =(targetStatus: TodoStatus)=>{
        axios.put("api/todo/" + props.todo.id,{
            ...props.todo,
            status: targetStatus} as Todo)
            .then(props.onTodoItemChange)

    }


    return(
        <div className="todo-card">
            <input value={description} onInput={changeText}/>
            <button onClick={deleteThisItem}>🚮</button>

            {
                props.todo.status === "OPEN" ?
                    <div></div> :
                    (
                        props.todo.status === "IN_PROGRESS" ?
                            <button onClick={() => move("OPEN")}>⬅️</button> :
                            <button onClick={() => move("IN_PROGRESS")}>⬅️</button>
                    )
            }

            {
                props.todo.status === "DONE" ?
                    <div></div> :
                    (
                        props.todo.status === "OPEN" ?
                            <button onClick={() => move("IN_PROGRESS")}>➡️</button> :
                            <button onClick={() => move("DONE")}>➡️</button>

                    )
            }
        </div>
    )
}