import React from 'react';
import ListItem from '../listItem/ListItem';

function ArrayCourse() {
    let arr = ["item1", "item2", "item3" ]

    return (
        <>
           { arr.map((item) => {
                return <ListItem item={item} />
            }) }
        </>
    )
}

export default ArrayCourse;