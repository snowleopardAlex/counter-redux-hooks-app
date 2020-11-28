import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux"


function App(props) {    
    const count = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default App;

// WHY YOU SHOULD USE CONNECT() INSTEAD OF HOOKS
// it is easier for TESTING 
// connect is wrapping the component which is still a component and it is easier to test 
// component must have separation between Redux part and component itself
// ZOMBIE CHILDREN with Hooks


