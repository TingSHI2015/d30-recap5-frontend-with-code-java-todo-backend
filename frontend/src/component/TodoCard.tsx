import {Todo} from "../type/Todo.ts";
import './TodoCard.css'

type TodoCardProps = {
    todo: Todo,
}

export default function TodoCard(props: TodoCardProps){


    return(
        <div className="todo-card">
            {
                props.todo.description
            }


        </div>
    )
}