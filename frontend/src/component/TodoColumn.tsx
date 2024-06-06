import {Todo} from "../type/Todo.ts";
import TodoCard from "./TodoCard.tsx";
import {TodoStatus} from "../type/TodoStatus.ts";
import './TodoColumn.css'
import NewTodoCard from "./NewTodoCard.tsx";

type TodoColumnProps = {
    status: TodoStatus,
    todos: Todo[],
    onTodoItemChange:()=>void,
}

export default function TodoColumn(props: TodoColumnProps) {

    return(
        <div className={"todo-column"}>
            <h2>{props.status}</h2>
            {
                 props.todos.map((todo)=> <TodoCard todo={todo} key={todo.id} onTodoItemChange={props.onTodoItemChange}/>)
            }
            {
                props.status==="OPEN" && <NewTodoCard onTodoItemChange={props.onTodoItemChange}/>
            }
        </div>

    )





}