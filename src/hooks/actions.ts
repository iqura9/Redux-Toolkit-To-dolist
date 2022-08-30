import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {TasksSlice} from "../redux/tasksSlice";

const actions = {
    ...TasksSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}