import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

//let arr = Array.from({ length: 30 }, (v, i) => i);
//{arr.map(x => {return <p>{x}</p>})} 

const IndexPage = () => (
  <Layout type="hero">
    <SEO title="Home" />
    <h1>Willkommen.</h1>
    <p>
      Go to <Link to="/blog">Blog</Link>
    </p>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/jPAagOgNMro?autoplay=1&controls=0 "
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
    </iframe>


    <video playsInline autoPlay muted loop>
      <source src="../videos/rotation.mov" />
      <source src="../videos/rotation.mp4" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos,
  but don't worry, you can and watch it with your favorite video player!
    </video>

  </Layout >
)

export default IndexPage
