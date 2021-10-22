import React from 'react'

type CounterProps = {
    count: number;
    onIncrease: ()=> void //아무것도 반환하지 않는 함수 라는 뜻
    onDecrease: ()=> void
    onIncreaseBy: (diff:number)=> void
}

function Counter({count, onIncrease, onDecrease, onIncreaseBy }: CounterProps){
    return (
        <>
        <h1>{count}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={()=>onIncreaseBy(5)}>+5</button>
        </>
    )
}

export default Counter;