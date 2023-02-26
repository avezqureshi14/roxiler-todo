import { ActionTypes } from "../constants/action-types"

const initialState = {
    todos:[{
        id:1,
        title:"Deipesh",
        category:"programmer"
    }]
}

export const todoReducer = ( state = {initialState} ,  {type,payload} ) => {
    switch (type){
        case ActionTypes.SET_TODOS:
            return {...state, todos:payload};
        default:
            return state;
    }
}

export const selectedTodoReducer = (state={}, {type,payload}) => {
    switch(type){
        case ActionTypes.SELECTED_TODO:
            return {...state,...payload}
        default:
           return  state;
    }
}