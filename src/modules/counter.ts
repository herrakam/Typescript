const INCREASE = 'counter/INCREASE' as const // ReturnType 사용하려고 붙임!
const DECREASE = 'counter/DECREASE' as const
const INCREASE_BY = 'counter/INCREASE_BY' as const

export const increase = ()=>({
    type:INCREASE
})

export const decrease = ()=>({
    type:DECREASE
})

export const increaseBy = (diff: number)=> ({
    type:INCREASE_BY,
    payload: diff
})

type CounterState = {
    count:number
}

type CounterAction = 
| ReturnType<typeof increase> // returnType을 사용하면 함수 increase의 결과물을 타입으로 가져올 수 있음
| ReturnType<typeof decrease>
| ReturnType<typeof increaseBy>

const initialState : CounterState = {
    count: 0
}

function counter(state : CounterState = initialState, action: CounterAction) : CounterState{  //:CounterState ==> 리듀서 함수의 리턴 타입을 CounterState로 정함
    switch(action.type){
        case INCREASE:
            return{
                count: state.count + 1
            }
        case DECREASE:
            return{
                count: state.count - 1
            }
        case INCREASE_BY:
            return{
                count: state.count + action.payload
            }
        default:
            return state
    }
}

export default counter;