import {combineReducers, configureStore} from "@reduxjs/toolkit";
import TaskReducer from "./tasksSlice";

const rootReducer = combineReducers({
    TaskReducer,
});

export const store = configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>