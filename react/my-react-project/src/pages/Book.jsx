import React from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {
    const { id } = useParams()
    return (
        <div>This is Book page {id}</div>
    )
}

export default Book