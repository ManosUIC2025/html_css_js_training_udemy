import React, { react, useState } from 'react'
import Title from '../title/Title'

const StateAsProps = () => {
    const [title, setTitle] = useState({ title: "This is a title", subtitle: "This is a subtitle" })
    return (
        <Title title={title.title} subtitle={title.subtitle} />
    )
}

export default StateAsProps