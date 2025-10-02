import React, { useState } from 'react'
import './toDoList.css'

const ToDoList = () => {
    const [formData, setFormData] = useState({ task: "" })
    const [list, setList] = useState([{ id: 1, task: "someTask", isDone: false }])

    //console.log(formData)

    function handleChange(event) {

        setFormData(prevData => {
            const { name, value } = event.target
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        //this works too :)
        // setList(prevList => {
        //     return [
        //         ...prevList,
        //         { task: formData.task, isDone: false, id: list.length + 1 }
        //     ]
        // })

        setList([
            ...list,
            { task: formData.task, isDone: false, id: list.length + 1 }
        ])
    }

    function handleClick(taskId) {
        console.log(taskId)
        const newList = list.map((task) => {
            if (task.id == taskId) {
                return { ...task, isDone: !task.isDone }
            } else {
                return task
            }
        })
        console.log(newList)
        setList(newList)
    }

    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Task'
                    name='task'
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
            <hr />
            {list.filter(task => task.isDone).length} out of {list.length} tasks are done
            <hr />
            <ul>
                {list.map((task, index) => {
                    return <li key={index} className={task.isDone ? 'strike' : ''} onClick={() => { handleClick(task.id) }}>{task.task}</li>
                })}
            </ul>
        </>
    )
}

export default ToDoList