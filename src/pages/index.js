// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"

// Define component
const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <title>Home</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <h1>Home</h1>
      <p>Welcome to my blog that I created for fun.</p>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default IndexPage
