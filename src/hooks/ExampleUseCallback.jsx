import React, { useCallback, useState } from 'react'

const Botones = ({ increment, decrement }) => {
    return (
        <>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}


const ExampleUseCallback = () => {

    const [counter, setCounter] = useState(0)

    const increment = useCallback(() => {
        setCounter(counter => counter + 1)
    }, [])

    const decrement = useCallback(() => {
        setCounter(counter => counter - 1)
    }, [])

    return (
        <div>
            <h5>Counter: {counter}</h5>
            <Botones increment={increment} decrement={decrement} />
        </div>
    )
}

export default ExampleUseCallback