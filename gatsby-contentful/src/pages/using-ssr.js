import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  console.log(serverData);
  return (
    <Layout>
      <h1>
        This page is <b>rendered server-side</b>
      </h1>
      <p>
        This page is rendered server side each time the page is requested.
        Reload it to see a(nother) random dawg photo.
      </p>
      <br />
      <img
        alt="A random dog"
        src={serverData.message}
      />
      <br />
      <p>URL de la imagen: <b>{serverData.message}</b></p>
    </Layout>
  )
}

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`);
    if (!res.ok) throw new Error(`Response failed`);
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: { message: "something went wrong" },
    }
  }
};

export const Head = () => <Seo title="Using SSR" />;
export default UsingSSR;