import React, { useRef, useState } from 'react'
import './ExampleUseRef.css'

const ExampleUseRef = () => {

    const imgRef = useRef(null)

    const [photos, setPhotos] = useState([
        { id: 1, url: 'https://picsum.photos/id/166/900/900'},
        { id: 2, url: 'https://picsum.photos/id/244/900/900'},
        { id: 3, url: 'https://picsum.photos/id/399/900/900'},
        { id: 4, url: 'https://picsum.photos/id/785/900/900'},
    ])

    const loadPreview = e => {
        imgRef.current.src = e.target.src
    }

    return (
        <>
        <div>Photos</div>
        <ul className='gallery'>
            {
                photos.length > 0 && 
                photos.map((img) => {
                    return (
                        <li key={img.id}><img src={img.url} width={100} height={100} onClick={loadPreview} /></li>
                    )
                })
            }
        </ul>
        <div>Preview</div>
        <img ref={imgRef} className='loader' />
        </>

    )
}

export default ExampleUseRef