import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ITasks {
    tasks: IInfoTask[];
}
export interface IInfoTask {
    id:Date,
    title:string,
    completed:boolean,
}

const initialState: ITasks = {
    tasks: []
}

export const TasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const NewTask = {
                id: new Date(),
                title: action.payload,
                completed: false,
            }
            state.tasks.push(NewTask);
        },
        removeTask: (state, action: PayloadAction<Date>) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload)
        }
    }
})
export default TasksSlice.reducer;