import { ActionType , createReducer, deprecated} from "typesafe-actions"

const { createStandardAction} = deprecated;

const INCREASE = 'counter/INCREASE' 
const DECREASE = 'counter/DECREASE' 
const INCREASE_BY = 'counter/INCREASE_BY' 

export const increase = createStandardAction(INCREASE)()  //윗줄과 같은 뜻! 
export const decrease = createStandardAction(DECREASE)()
export const increaseBy = createStandardAction(INCREASE_BY)<number>() 

type CounterState = {
    count:number
}

const actions = {increase, decrease, increaseBy}

type CounterAction = ActionType<typeof actions> 

const initialState : CounterState = {
    count: 0
}

const counter = createReducer<CounterState, CounterAction>(initialState, { //createReducer로 reducer 함수 만들기
    [INCREASE]: state => ({ count: state.count + 1}),
    [DECREASE]: state => ({ count: state.count - 1}),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload})
})

// function counter(state : CounterState = initialState, action: CounterAction) : CounterState{  //:CounterState ==> 리듀서 함수의 리턴 타입을 CounterState로 정함
//     switch(action.type){
//         case INCREASE:
//             return{
//                 count: state.count + 1
//             }
//         case DECREASE:
//             return{
//                 count: state.count - 1
//             }
//         case INCREASE_BY:
//             return{
//                 count: state.count + action.payload
//             }
//         default:
//             return state
//     }
// }

export default counter;