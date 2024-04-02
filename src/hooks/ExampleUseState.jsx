import React, { useState } from 'react'

const ExampleUseState = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h4>Show: { show ? "ocultar" : "mostrar"}</h4>
            <button onClick={() => setShow(!show)}>{ show ? "ocultar" : "mostrar"}</button>
        </div>
    )
}

export default ExampleUseState