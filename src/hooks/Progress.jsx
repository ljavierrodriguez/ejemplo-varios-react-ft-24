import React, { useEffect, useState } from 'react'

const Progress = ({ valor = 0 }) => {
    const [size, setSize] = useState(valor)
    const [id, setId] = useState(null)
    /* useEffect(() => {

        let intervalId = setInterval(() => {
            setSize(size => size + 1)
        }, 1000)

        setId(intervalId)

        return () => {
            clearInterval(intervalId)
        }

    }, [])



    useEffect(() => {
        if(size == 100) clearInterval(id)
    }, [size]) */


    return (
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ "width": valor + "%" }}>{valor}%</div>
        </div>
    )
}

export default Progress