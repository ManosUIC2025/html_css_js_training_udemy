import React, { useState } from 'react'

export default function Login() {
    const [formState, setFormState] = useState({ firstName: '', password: '' });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState((prev, props) => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    return (
        <form>
            <input
                value={formState.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
            />
            <input
                value={formState.password}
                onChange={handleChange}
                type="password"
                name="password"
            />
        </form>
    );
}
