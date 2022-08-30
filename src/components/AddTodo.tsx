import React, {useState} from "react";

import {useActions} from "../hooks/actions";

export const AddTodo = () => {
    const [value,setValue] = useState('');
    const {addTask} = useActions()
    const onSubmit = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        if(value.trim().length === 0) { alert('Enter a task '); setValue(''); return}

        addTask(value);
        setValue('');

    }
    return (
        <div className="add-todo">
            <input
                type="text"
                className="task-input"
                placeholder="Add task"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>

            <button className="task-button" onClick={onSubmit}>
                Save
            </button>
        </div>
    );
};

