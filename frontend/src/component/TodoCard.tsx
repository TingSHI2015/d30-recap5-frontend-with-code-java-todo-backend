import {Todo} from "../type/Todo.ts";

type TodoCardProps = {
    todo: Todo,
}

export default function TodoCard(props: TodoCardProps){


    return(
        <div>
            {
                props.todo.description
            }


        </div>
    )
}