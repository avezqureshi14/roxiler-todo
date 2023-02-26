import { ActionTypes } from "../constants/action-types"

export const setTodos = (todos) => {
    return {
        type:ActionTypes.SET_TODOS,
        payload: todos,
    }
}


export const selectedTodo = (todo) => {
    return {
        type:ActionTypes.SELECTED_TODO,
        payload:todo,
    }
}