import React, { useState } from 'react'
import Counter from './Counter'

const PropsCourse = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1)
        console.log(count)
    }
    return (
        <>
            <div>PropsCourse</div>
            <button onClick={handleClick}>Increment Count</button>
            <Counter count={count} />
        </>
    )
}

export default PropsCourse