import React, { useContext } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    )
}

export default ThemeToggle;