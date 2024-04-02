import React, { useEffect, useState } from 'react'

const Counter = ({ valor = 0, type = 'up' }) => {
    const [counter, setCounter] = useState(valor)
    const [intervalId, setIntervalId] = useState(null) 

    useEffect(() => {

        let intervalId = setInterval(() => {
            if (type === 'up')
                setCounter(counter => counter + 1)
            else{
                setCounter(counter => counter - 1)
            }
        }, 1000)
        setIntervalId(intervalId)
        return () => {
            clearInterval(intervalId)
        }

    }, [])

    useEffect(() => {
        if(type=='up' && counter === 9999){
            clearInterval(intervalId)
        }

        if(type == 'down' && counter === 0){
            clearInterval(intervalId)
        }
    }, [counter])

    const start = () => {
        let intervalId = setInterval(() => {
            if (type === 'up')
                setCounter(counter => counter + 1)
            else{
                setCounter(counter => counter - 1)
            }
        }, 1000)
        setIntervalId(intervalId)
    }

    const stop = () => {
        clearInterval(intervalId)
        setCounter(valor)
    }

    const pause = () => {
        clearInterval(intervalId)
    }

    return (
        <>
        <div>Counter: {Math.floor(counter / 1000 % 10)}:{Math.floor(counter / 100 % 10)}:{Math.floor(counter / 10 % 10)}:{counter / 1 % 10}</div>   
        <button onClick={start}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={stop}>Stop</button>
        </>
    )
}

export default Counter