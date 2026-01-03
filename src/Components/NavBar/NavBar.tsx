import React from 'react'
import { useTheme } from "../../CustomHooks/ThemeContext"
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
 const { theme, toggleTheme } = useTheme();
  return (
   <nav className="navbar">
     <Link to="/" className="logo-link">
     <h1>Where in the world?</h1>
     </Link>
  <button onClick={toggleTheme} className="theme-toggle">
  <span className="icon">
    {theme === 'light' ? '🌙' : '☀️'}
  </span>
  <span className="text">
    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
  </span>
</button>
    </nav>
  )
}
