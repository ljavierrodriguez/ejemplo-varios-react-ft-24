import React from 'react'
import ExampleUseState from './hooks/ExampleUseState'
import ExampleUseEffect from './hooks/ExampleUseEffect'
import ExampleUseCallback from './hooks/ExampleUseCallback'
import Counter from './hooks/Counter'
import ExampleUseRef from './hooks/ExampleUseRef'
import ExampleUseReducer from './hooks/ExampleUseReducer'
import ExampleCustomHooks from './hooks/ExampleCustomHooks'
import Progress from './hooks/Progress'
import AudioPlay from './hooks/AudioPlay'
import CustomButton from './hooks/CustomButton'
import CustomInput from './hooks/CustomInput'

const App = () => {
    return (
        <div>
            <h5>Uso de custom Hook</h5>
            <ExampleCustomHooks />

            <h5>Audio with useRef</h5>
            <AudioPlay />

            <h5>Uso del useState</h5>
            <ExampleUseState />
            <h5>Uso del useEffect</h5>
            <ExampleUseEffect />
            <h5>Uso del useCallback</h5>
            <ExampleUseCallback />

            <h5>Counter with useEffect</h5>
            <Counter valor={1000} type='up' />
            <Counter valor={30} type='down' />

            <h5>Uso del useRef</h5>
            <ExampleUseRef />

            <h5>Uso del useReducer</h5>
            <ExampleUseReducer />

            <h5>Ejemplo Progress</h5>
            <Progress />

            <h5>Boton Personalizado</h5>
            <CustomButton>Boton 1</CustomButton>
            <CustomButton>Boton 2</CustomButton>
            <CustomButton>Boton 3</CustomButton>

            <h5>Caja de Texto Personalizado</h5>
            <CustomInput />
        </div>
    )
}

export default App