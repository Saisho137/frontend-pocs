import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import User from "../components/User/User"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <User name={'Santiago Betancur Duque'} bornDate={2002} currentDate={2024} />
  </Layout>
)

export const Head = () => <Seo title="Page two" />
export default SecondPage
