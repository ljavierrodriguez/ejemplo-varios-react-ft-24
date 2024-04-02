import React, { useEffect, useRef, useState } from 'react'
import Progress from './Progress'

const AudioPlay = () => {
    const audioRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [valor, setValor] = useState(0);

    useEffect(() => {
        audioRef.current.src = "https://playground.4geeks.com/sound/files/mario/songs/underworld.mp3";
        audioRef.current.play()
        let intervalId = setInterval(() => {
            setCurrentTime(audioRef.current.currentTime)
            setValor(Math.ceil(Math.floor(audioRef.current.currentTime * 100) / audioRef.current.duration))
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [audioRef])

    const handleLoadedMetaData = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration)
        }
    }


    const calcularTiempo = () => {
        return Math.floor((duration * currentTime) / 100)
    }


    return (
        <div>
            <p>Time: {currentTime}</p>
            <p>Duration:{duration}</p>
            <audio ref={audioRef} controls onLoadedMetadata={handleLoadedMetaData} />
            <Progress valor={valor} />
        </div>
    )
}

export default AudioPlay