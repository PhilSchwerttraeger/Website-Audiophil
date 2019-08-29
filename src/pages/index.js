import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import layoutStyles from "../layout/layout.module.scss"

//let arr = Array.from({ length: 30 }, (v, i) => i);
//{arr.map(x => {return <p>{x}</p>})} 

const IndexPage = () => (
  <Layout type="hero">
    <SEO title="Home" />
    <section>
      <div className={layoutStyles.contentWrap}>
        <h2 className={layoutStyles.contentTitle} id="firstsection">
          Hallo Internet!
        </h2>
        <div className={layoutStyles.contentText}>
          <p>
            Seitdem ich denken kann begeistere ich mich für Musik und Technik. Seit 2013 arbeite ich mit Künstlern und Bands zusammen an ihren Alben, vom Songwriting über Aufnahme bis hin zum Mastering und Remix.
          </p>
          <p>
            Lange Zeit in improvisierten Räumlichkeiten in einem alten Musterhaus, träumte ich davon ein eigenes Tonstudio zu bauen. Vor einigen Jahren habe ich einen guten Freund kennengelernt, der zusammen mit mir dieses Ziel erreichen möchte. Diese Seite enthält einen <Link to="/blog">Blog</Link>, in welchem ich den aktuellen Stand unserer Planung und unseres Baus festhalte, aber auch detailliert auf alle technischen und bauakustischen Hintergründe eingehe.
          </p>
          <p>
            Da ich nahezu den ganzen Bau von der Planung bis zum fertigen Ausbau selbst mache, möchte ich auf diesem Blog Wissen und Erfahrungen sammeln, bündeln und der Welt wieder zurückgeben. Ich würde mich freuen, wenn ich hiermit interessierte Menschen oder zukünftige Studiobauer erreichen kann und ihnen bei der einen oder anderen Sache mehr Durchblick verschaffen kann.
          </p>
          <p>
            Ich freue mich jederzeit über Kommentare und Kritik. Falls du Interesse hast bei uns aufzunehmen, fühl dich frei uns einfach anzuschreiben.
          </p>
        </div>
        <div className={layoutStyles.centered}>
          <Link
            to="/blog"
          >
            <button
              type="button"
              className={layoutStyles.button}
            >
              <span>Zum Blog</span>
            </button>
          </Link>
        </div>
      </div>
    </section>


  </Layout >
)

export default IndexPage
