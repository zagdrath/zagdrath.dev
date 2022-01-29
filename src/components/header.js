// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { nav, navHome, navItems, navItem, navItemLink, } from './header.module.scss'

// Export component
export default function Header() {
  return (
    <div>
      <nav className={nav}>
        <Link to="/" className={navHome}>Zagdrath</Link>
        <ul className={navItems}>
          <li className={navItem}>
            <Link to="/blog" className={navItemLink}>Blog</Link>
          </li>
          <li className={navItem}>
            <Link to="/about" className={navItemLink}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
