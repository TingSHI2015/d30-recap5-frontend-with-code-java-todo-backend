import {Todo} from "../type/Todo.ts";
import axios from "axios";
import {ChangeEvent, useState} from "react";

type NewTodoCardProps={
    //todo: Todo,
    onTodoItemChange:()=>void,
}

export default function NewTodoCard(props: NewTodoCardProps){
    const[text, setText] = useState<string>("")

    const changeText = (event:ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value)
    }

    const saveTodo = ()=>{
        setText("")
        axios.post("api/todo", {
            description: text,
            status: "OPEN"
        } as Todo)
            .then(props.onTodoItemChange)
            .catch(error => {console.log(error)})
            .finally(()=>console.log("Finally-Post"))
    }

    return(
        <div className="todo-card">
            <input type="text" value={text} onInput={changeText}/>
            <button onClick={saveTodo}>Save</button>
        </div>
    )


}