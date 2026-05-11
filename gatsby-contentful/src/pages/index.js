import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Counter from "../components/Counter/Counter"
//import * as styles from "../components/index.module.css"

const IndexPage = () => {
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter(counter + 1);
  }
  return (
    <Layout>
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Static image"
      />

      <Counter counter={counter} />
      <button onClick={handleClick}> Agregar </button>

      <br />
      <Link to="/page-2">Go to the second page</Link>
      <br />
      <Link to="/using-ssr">Go to the SSR page</Link>
      <br />
      <Link to="/using-typescript">Go to the TypeScript page</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage
