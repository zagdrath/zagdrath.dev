// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticImage } from 'gatsby-plugin-image'
import { container, main, avatar, mainHey, mainAboutTitle, mainAbout, mainButtons, button, } from './index.module.scss'

// Define component
const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <title>Zagdrath</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <div className={container}>
        <div className={main}>
          <h1 className={mainHey}>Hey! I'm Zagdrath 👋</h1>
          <h2 className={mainAboutTitle}>I'm a software developer, information technology specialist & </h2>
          <p className={mainAbout}>Welcome! It's great to have you here. This is a blog I created to write some technology tutorials and other stuff.</p>
          <div className={mainButtons}>
          <Link to="/blog" className={button}>See my Blog Here</Link>
          </div>
        </div>
        <div className={avatar}>
          <StaticImage alt="Avatar" src="../images/avatar.png"/>
        </div>
      </div>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default IndexPage
