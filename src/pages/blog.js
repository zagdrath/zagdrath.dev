// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticImage } from 'gatsby-plugin-image'
import { blogList, } from '../styles/blog.module.scss'

// Define component
const BlogPage = () => {
  return (
    <body>
      <Helmet>
        <title>Blog</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <h1>Blog</h1>
      <h2 className={blogList}><Link to="/blog/kms-server">How to Activate Windows using a KMS Server</Link></h2>
      <p>Published: January, 25 2022</p>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default BlogPage
