import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = () => (
  <Layout>
    <h1>
      Hello from a <b>DSG Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />;
export default UsingDSG;
