// const ADD_TODO = 'todos/ADD_TODO' as const  // ReturnType 사용하려고 붙임!
// const TOGGLE_TODO = 'todos/TOGGLE_TODO'  as const
// const REMOVE_TODO = 'todos/REMOVE_TODO' as const

// let nextId = 1
//  export const addTodo = (text:string) => ({
//      type:ADD_TODO,
//      payload: {
//         id: nextId++,
//         text
//     }
//  })

//  export const toggleTodo = (id:number)=> ({
//      type:TOGGLE_TODO,
//      payload: id
//  })

//  export const removeTodo = (id:number)=> ({
//      type: REMOVE_TODO,
//      payload: id
//  })

// type TodoAction = 
// |ReturnType<typeof addTodo> // returnType을 사용하면 함수 addTodo의 결과물을 타입으로 가져올 수 있음
// |ReturnType<typeof toggleTodo>
// |ReturnType<typeof removeTodo>

// export type Todo = {
//     id:number;
//     text:string;
//     done:boolean;
// }

// type TodosState = Todo[]
// const initialState: TodosState = []

// function todos(state:TodosState = initialState, action:TodoAction){
//     switch(action.type){
//         case ADD_TODO:
//             return state.concat({
//                 id:action.payload.id,
//                 text: action.payload.text,
//                 done:false
//             })
//         case TOGGLE_TODO:
//             return state.map(todo=> todo.id === action.payload ? {...todo, done: !todo.done} : todo )
//         case REMOVE_TODO:
//             return state.filter(todo=> todo.id !== action.payload)
//         default:
//             return state
//     }
// }

// export default todos


import { deprecated ,  ActionType, createReducer} from "typesafe-actions";

const {createStandardAction} = deprecated
const ADD_TODO = 'todos/ADD_TODO' as const
const TOGGLE_TODO = 'todos/TOGGLE_TODO'  
const REMOVE_TODO = 'todos/REMOVE_TODO' 

let nextId = 1
 export const addTodo = (text:string)=> ({
     type:ADD_TODO,
     payload:{
         id:nextId++,
         text
     }
 })

 export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>()
 export const removeTodo = createStandardAction(REMOVE_TODO)<number>()

 const actions = {addTodo, toggleTodo, removeTodo}
 export type TodosAction = ActionType<typeof actions>

export type Todo = {
    id:number;
    text:string;
    done:boolean;
}

type TodosState = Todo[]
const initialState: TodosState = []

const todos = createReducer<TodosState, TodosAction>(initialState, { 
    [ADD_TODO]: (state, action)=> state.concat({
        ...action.payload,
        done:false
    }),
    [TOGGLE_TODO]: (state, action)=> state.map(
        todo=> todo.id === action.payload 
        ? {...todo, done: !todo.done} 
        : todo),
    [REMOVE_TODO]: (state, action)=> state.filter(todo=> todo.id !== action.payload)

})

export default todos