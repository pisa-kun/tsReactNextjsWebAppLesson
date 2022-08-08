import {useReducer} from 'react';

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

// 現在の状態とactionにもとづいて次の状態を返す
// 状態を表す関数が外に出ているのでテストしやすい
const reducer = (currentCount: number, action: Action) => {
    switch(action){
        case 'INCREMENT':
            return currentCount + 1
        case 'DECREMENT':
            return currentCount - 1
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET':
            return 0
        default:
            return currentCount
    }
}

type CounterProps = {
    initialValue: number
}

const Counter = (props: CounterProps) => {
    const {initialValue} = props;
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>*2</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    )
}

export default Counter