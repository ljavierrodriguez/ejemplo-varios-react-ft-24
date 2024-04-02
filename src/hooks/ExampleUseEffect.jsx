import React, { useEffect, useState } from 'react'

const ExampleUseEffect = () => {

    const [date, setDate] = useState(null)

    useEffect(() => {
        let intervalId = setInterval(() => {
            setDate(new Date().toISOString())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return (
        <div>{date}</div>
    )
}

export default ExampleUseEffect