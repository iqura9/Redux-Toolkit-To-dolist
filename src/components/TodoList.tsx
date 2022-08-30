import {FC} from "react";
import {IInfoTask} from "../redux/tasksSlice";
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";


export const TodoList = () => {
    const {tasks} = useAppSelector(state => state.TaskReducer)
    return (
            <ul className="tasks-list">
            {tasks.map((todo:IInfoTask) => (
                <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>

    );
};

const TodoItem: FC<IInfoTask> = ({title, id, completed}) => {
    const { removeTask } = useActions();
    return (
        <li className="task-item">
            <div>
                {title}
            </div>
            <div>
                <button className="remove-task-button" onClick={()=>{
                    removeTask(id);
                }}>Delete</button>
            </div>
        </li>
    )
}

