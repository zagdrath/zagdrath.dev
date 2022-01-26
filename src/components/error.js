// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { error, } from './error.module.scss'

// Export component
export default function Footer() {
  return (
    <div>
      <Helmet>
        <title>Error 404</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <h1 className={error}>Error 404</h1>
      <p className={error}>The requested URL was not found on this server.</p>
    </div>
  )
}
