import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Button = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    return (
        <button onClick={() => setDarkMode(!darkMode)}>Change color</button>
    )
}

export default Button