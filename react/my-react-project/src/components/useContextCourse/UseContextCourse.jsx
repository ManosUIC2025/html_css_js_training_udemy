import React, { useState } from 'react'
import Button from './Button'
import { ThemeContext } from './ThemeContext'

//export const ThemeContext = createContext()

const UseContextCourse = () => {
    const [darkMode, setDarkMode] = useState(false)

    const pageStyle = {
        backgroundColor: darkMode ? "black" : "white",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0
    }
    return (
        <ThemeContext value={{ darkMode, setDarkMode }}>
            <div style={pageStyle}>
                <Button>Change color</Button>
            </div>
        </ThemeContext>
    )
}

export default UseContextCourse