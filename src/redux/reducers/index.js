import { combineReducers } from "redux";
import { todoReducer, selectedTodoReducer } from "./todoReducer";
const reducers = combineReducers({
   allTodos:todoReducer,
   todo:selectedTodoReducer,
})

export default reducers;