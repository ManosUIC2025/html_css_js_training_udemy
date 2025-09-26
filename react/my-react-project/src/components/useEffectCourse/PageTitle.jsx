import React, { useState, useEffect } from 'react';

function PageTitle() {
    const [name, setName] = useState('');
    useEffect(() => {
        console.log("useEffect in action")
        document.title = `Hi, ${name}`;

        // document.addEventListener('keydown', handleKeyPress);
        // return () => {
        //     document.removeEventListener('keydown', handleKeyPress);
        // }
    }, [name]);

    // function handleKeyPress(event) {
    //     setName("key down pressed")
    // }

    return (
        <div>
            <p>Use the input field below to rename this page!</p>
            <input onChange={({ target }) => setName(target.value)} value={name} type='text' />
        </div>
    );
}

export default PageTitle;