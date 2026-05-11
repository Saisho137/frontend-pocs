import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title mock`} />
      <div>
        <main>
          {children}
        </main>
        <footer>
          <h2>Footer</h2>
        </footer>
      </div>
    </>
  )
}

export default Layout
