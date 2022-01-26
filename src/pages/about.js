// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticImage } from 'gatsby-plugin-image'

// Define component
const AboutPage = () => {
  return (
    <body>
      <Helmet>
        <title>About Me</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <h1>About Me</h1>
      <p>Hey, my name is Cody Wellman, but I usually go by Zagdrath online and, I am an information technology specialist working towards getting my associate's degree in computer networking systems and security. On the side, I am also a software developer, but that is mainly just a hobby. I am also a huge advocate of free software and the GNU/Linux operating systems.</p>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default AboutPage
