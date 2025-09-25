import React, { useState } from 'react'

const EmailInput = () => {
    let [email, setEmail] = useState('someEmail@uic.com');
    const handleChange = (event) => {
        setEmail(event.target.value)
    };
    return (
        <>
            <input value={email} onChange={handleChange} />
            <br />
            <p>{email}</p>
        </>
    )
}

export default EmailInput