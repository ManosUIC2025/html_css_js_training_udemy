import React, { useState } from 'react'

const List = () => {
    const [list, setList] = useState(["item1", "item2", "item3"]);
    return (
        <div>
            <ul>
                {list.map((item, index) => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default List