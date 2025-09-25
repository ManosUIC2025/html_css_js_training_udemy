import React, { useState } from 'react'

const FetchAPI = () => {
    const [users, setUsers] = useState(null)
    fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then((data) => { if (!users) { setUsers(data) } });

    console.log(users)

    return (
        <div>
            {users && users.map((user) => <h1>{user.login}</h1>)}

        </div>
    )
}

export default FetchAPI