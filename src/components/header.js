// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { navLinks, navLinkItem, } from './header.module.scss'

// Export component
export default function Header() {
  return (
    <div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/">Home</Link></li>
          <li className={navLinkItem}><Link to="/blog">Blog</Link></li>
          <li className={navLinkItem}><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}
