import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.querySelector("#counter").textContent = `Button was hit ${count} times`
    }, [count]);

    function handleClick(event) {
        setCount((prev) => {
            return prev + 1;
        });
    }
    return (
        <>
            <div>Counter: {count}</div>
            <br />
            <p id="counter"></p>
            <br />
            <button onClick={handleClick} >Hit the counter</button>
        </>
    )
}

export default Counter