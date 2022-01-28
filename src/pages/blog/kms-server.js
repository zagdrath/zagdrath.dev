// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from "../../components/header"
import Footer from "../../components/footer"
import { StaticImage } from 'gatsby-plugin-image'

// Define component
const KMSServerPage = () => {
  return (
    <body>
      <Helmet>
        <title>How to Activate Windows using a KMS Server</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <h1>How to Activate Windows using a KMS Server</h1>
      <a href="https://www.zagdrath.xyz/">by Zagdrath</a>
      <p>This is an article teaching you how to active your Windows installation using a KMS server. So, let's begin!</p>
      <h2>Opening Command Prompt</h2>
      <p>In order to open command prompt you will want to click onto the Windows start menu and type "command prompt" into the search bar and when it pops up you will want to click on "Run as administrator" on the right side.</p>
      <StaticImage  alt="CommandPrompt" src="../../images/commandprompt.png"/>
      <h2>Setting the KMS key</h2>
      <p>Into this window you will type or copy(Ctrl-C) and paste(Ctrl-V) the command into the Command Prompt window. You will have to change the key to the version you have installed and are activating. You can <a href="https://docs.microsoft.com/en-us/windows-server/get-started/kms-client-activation-keys">click here</a> for a list of all the KMS keys. Once you have put the command in and have changed the KMS key you can now hit enter.</p>
      <pre>slmgr /ipk XXXXX-XXXXX-XXXXX-XXXXX-XXXXX</pre>
      <h2>Setting the KMS Server</h2>
      <p>Now you will be setting which KMS server you will be using. Again, just type or copy(Ctrl-C) and paste(Ctrl-V) the command into the Command Prompt window. Once you have put the command in and have changed the KMS server to your own KMS server you can now hit enter.</p>
      <pre>slmgr /skms kms.example.com</pre>
      <h2>Activate Windows</h2>
      <p>Now all you have to do is run the command to activate Windows and you should be all good. Again, just type or copy(Ctrl-C) and paste(Ctrl-V) the command into the Command Prompt window. Once you have put the command in you can now hit enter.</p>
      <pre>slmgr /ato</pre>
      <p>If you have any questions or need any help you can reach me at my primary website <a href="https://www.zagdrath.xyz/">zagdrath.xyz</a>.</p>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default KMSServerPage
