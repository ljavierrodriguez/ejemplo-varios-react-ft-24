import React, { useReducer } from 'react'

const initialState = {
    name: '',
    lastname: '',
    email: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.value }
        case 'lastname':
            return { ...state, name: action.value }
        case 'email':
            return { ...state, name: action.value }
        default:
            return state;
    }
}

const ExampleUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>
                Name: {state.name}
            </p>
            <input type="text" onChange={(e) => dispatch({ type: 'name', value: e.target.value })} placeholder='Insert name' />
            <input type="text" onChange={(e) => dispatch({ type: 'lastname', value: e.target.value })} placeholder='Insert lastname' />
            <input type="email" onChange={(e) => dispatch({ type: 'email', value: e.target.value })} placeholder='Insert email' />
        </div>
    )
}

export default ExampleUseReducer




/* import React, { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}

const ExampleUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h5>{state.count}</h5>
            <button onClick={() => dispatch({ type: 'increment'})}>+</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
        </div>
    )
}

export default ExampleUseReducer */