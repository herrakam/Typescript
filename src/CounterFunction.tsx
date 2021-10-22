import React, {useState, useReducer} from 'react'

type Action = {type: 'INCREASE'} | {type: 'DECREASE'};

function reducer(state: number, action: Action): number {
    switch(action.type){
        case 'INCREASE':
            return state + 1
        case 'DECREASE':
            return state - 1
        default: throw new Error('Unhandled action type')
    }
}

function CounterFunction(){
    //useState로 구현
    // const [count,setCount] = useState<number>(0)
    // const onIncrease = ()=> setCount(count + 1)
    // const onDecrease = ()=> setCount(count - 1)

    //useReducer로 구현
    const [count, dispatch] = useReducer(reducer, 0)
    const onIncrease = ()=> dispatch({type: 'INCREASE'})
    const onDecrease = ()=> dispatch({type: 'DECREASE'})



    return(
        <>
        <div className="count">{count}</div>
        <button onClick={onIncrease}> + </button>
        <button onClick={onDecrease}> - </button>
        </>
    )
}

export default CounterFunction