import React, { useState, useEffect } from 'react'

const LocalStorage = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '' })
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log(user)
        // console.log(users)
    }, [user])

    // useEffect(() => {
    //     // console.log(user)
    //     console.log(users)
    // }, [users])

    useEffect(() => {
        let storedUsers = localStorage.getItem("users")
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers))
        }
    }, [])

    function handleChange(event) {
        setUser((prev) => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault() //stops browser's default behaviour, in ths case calling an action (if action not found, reload the page)
        // setUsers((prev) => {
        //     return [
        //         ...prev,
        //         user
        //     ]
        // })
        if (!user.firstName || !user.lastName) {
            alert('Both fields should be filled')
        } else {
            let updateUsers = [...users, user]
            setUsers(updateUsers)
            localStorage.setItem("users", JSON.stringify(updateUsers))
        }
    }

    return (
        <>
            <div>LocalStorage</div>
            <br />
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='First Name' onChange={handleChange} name='firstName' />
                <input type='text' placeholder='Last Name' onChange={handleChange} name='lastName' />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {users.map((user) => <li>{`${user.firstName} ${user.lastName}`}</li>)}
            </ul>
        </>
    )
}

export default LocalStorage