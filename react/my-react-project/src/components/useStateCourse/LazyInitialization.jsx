import React, { useState } from 'react'

const LazyInitialization = () => {
    const getInitialState = () => {
        console.log("getInitialState")
        return 'this is initial state'
    }
    const [state, setState] = useState(getInitialState)
    function handleClick() {
        setState('this is a new state')
    }
    return (
        <>
            <div>LazyInitialization</div>
            <br />
            <p onClick={handleClick}>{state}</p>
        </>
    )
}

export default LazyInitialization