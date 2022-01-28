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
          <li className={navLinkItem}><Link to="/"><h3>Home</h3></Link></li>
          <li className={navLinkItem}><Link to="/blog"><h3>Blog</h3></Link></li>
          <li className={navLinkItem}><Link to="/about"><h3>About</h3></Link></li>
        </ul>
      </nav>
    </div>
  )
}
