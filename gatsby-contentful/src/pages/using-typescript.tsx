// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, graphql, HeadFC } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => (
  <Layout>
    <h1>
      Gatsby supports <b>TypeScript by default</b>
    </h1>
    <p>
      This means that you can create and write <code>.ts/.tsx</code> files for
      your pages, components, and <code>gatsby-*</code> configuration files (for
      example <code>gatsby-config.ts</code>).
    </p>
    <p>
      You're currently on the page <code>{location.pathname}</code> which was
      built on {data.site.buildTime}.
    </p>
  </Layout>
);

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript" />;
export default UsingTypescript;
