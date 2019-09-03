import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import layoutStyles from "../layout/layout.module.scss"

import patch from "../images/patch.png"
import Grid from "@material-ui/core/Grid"

const hardNumbers = [
  {
    title: "100 m²",
    subtitle: "Gebäudefläche",
    text: "Genug Platz für kleine und mittlere Produktionen.",
  },
  {
    title: "3,80 m",
    subtitle: "Raumhöhe",
    text:
      "Für ein großes Raumvolumen, besser verteilte Raummoden und natürlich die Möglichkeit flexibel auch mal von oben zu mikrofonieren.",
  },
  /*
  {
    title: "5",
    subtitle: "Räume",
    text:
      "Aufnahmeraum, Regieraum, Lobby bzw. Eingangsbereich mit Küchenzeile, ein kleines WC und ein Hausanschlussraum",
  },
  */
  {
    title: "620 m²",
    subtitle: "Außenanlage",
    text:
      "Hinter dem Gebäude befindet sich direkt eine kleine Außenanlage mit Terrasse, Grill und Pool.",
  },
  {
    title: "ab 38 Hz",
    subtitle: ">60dB",
    text:
      "Mit unserer speziellen Raum-in-Raum-Konstruktion erreichen wir ab 38Hz aufwärts eine Schallreduktion von über 60dB.",
  },
]

const disciplines = [
  {
    title: "Schalldämmung",
    text:
      "Durch unsere spezielle Raum-in-Raum-Konstruktion erreichen wir sehr hohe akustische Dämmwerte, welche eine ideale Aufnahme- und Abhörumgebung schafft.",
  },
  {
    title: "Variable Akustik",
    text:
      "Diverse selbst entwickelte Akustikelemente schaffen eine flexible Raumakustik, die sich an alle künstlerischen Anforderungen anpasst.",
  },
  {
    title: "LED und Sternerdung",
    text:
      "Um möglichst viele Störeinflüsse wie elektrische Felder und Surren von Netzteilen zu eliminieren, setzen wir u.a. konsequent auf LED-Beleuchtung mit Niedervoltspeisung und eine separate Sternerdung aller Studiogeräte.",
  },
  {
    title: "Smarte Gebäudetechnik",
    text:
      "Das Gebäude ist voll vernetzt und bietet daher viele Vorzüge, beispielsweise voll-automatisierte Regelung von Lüftung, Klima, Heizung oder auch Licht.",
  },
]

const hardNumbers2 = [
  {
    value: "8.100 kg",
    unit: "Konstruktionsvollholz",
  },
  {
    value: "1.600 m",
    unit: "Konstruktionsvollholz",
  },
  {
    value: "9.300 kg",
    unit: "Gipskarton & OSB",
  },
  {
    value: "11.000",
    unit: "Schrauben & Nägel",
  },
  {
    value: "2.400 m",
    unit: "Elektrokabel",
  },
  {
    value: "22 l",
    unit: "Akustikkleber",
  },
]

const IndexPage = () => (
  <Layout type="hero">
    <SEO title="Home" />

    {/* SECTION A: WELCOME */}
    <section>
      <div className={layoutStyles.contentWrap}>
        <h2 id="section-a">Hallo Internet!</h2>
        <div className={layoutStyles.contentText}>
          <p>
            Seitdem ich denken kann begeistere ich mich für Musik und Technik.
            Seit 2013 arbeite ich mit Künstlern und Bands zusammen an ihren
            Alben, vom Songwriting über Aufnahme bis hin zum Mastering und
            Remix.
          </p>
          <p>
            Lange Zeit in improvisierten Räumlichkeiten in einem alten
            Musterhaus, träumte ich davon ein eigenes Tonstudio zu bauen. Vor
            einigen Jahren habe ich einen guten Freund kennengelernt, der
            zusammen mit mir dieses Ziel erreichen möchte. Diese Seite enthält
            einen <Link to="/blog">Blog</Link>, in welchem ich den aktuellen
            Stand unserer Planung und unseres Baus festhalte, aber auch
            detailliert auf alle technischen und bauakustischen Hintergründe
            eingehe.
          </p>
          <p>
            Da ich nahezu den ganzen Bau von der Planung bis zum fertigen Ausbau
            selbst mache, möchte ich auf diesem Blog Wissen und Erfahrungen
            sammeln, bündeln und der Welt wieder zurückgeben. Ich würde mich
            freuen, wenn ich hiermit interessierte Menschen oder zukünftige
            Studiobauer erreichen kann und ihnen bei der einen oder anderen
            Sache mehr Durchblick verschaffen kann.
          </p>
          <p>
            Ich freue mich jederzeit über Kommentare und Kritik. Falls du
            Interesse hast bei uns aufzunehmen, fühl dich frei uns einfach
            anzuschreiben.
          </p>
        </div>
        <div className={layoutStyles.centered}>
          <Link to="/blog">
            <button type="button" className={layoutStyles.button}>
              <span>Zum Blog</span>
            </button>
          </Link>
        </div>
      </div>
    </section>

    {/* SECTION B: FEATURES */}
    <section>
      <div
        className={layoutStyles.contentWrap}
        style={{
          backgroundImage: `url(${patch})`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          borderRadius: "25px",
        }}
      >
        <h2 className={layoutStyles.featuresTitle} id="section-b">
          Harte Zahlen
        </h2>
        <Grid
          container
          justify="center"
          className={layoutStyles.featureContainer}
        >
          {hardNumbers.map(item => {
            return (
              <Grid item xs={6} md={3} className={layoutStyles.feature}>
                <div className={layoutStyles.card}>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p>{item.text}</p>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </section>

    {/* SECTION C: DREAM */}
    <section>
      <div className={layoutStyles.contentWrap}>
        <h2 id="section-c">Was lange währt, wird endlich gut.</h2>
        <div className={layoutStyles.contentText}>
          <p>
            Kaum zu glauben, aber bereits Anfang 2014 begann dieses Projekt.
            Seitdem hat sich vieles verändert. Aus einem anfangs kleinen Anbau
            ist mittlerweile ein autarkes Gebäude geworden. Auch die technischen
            Anforderungen wuchsen mit der Zeit, sodass der Bau bauakustisch nun
            sogar aller höchste Ansprüche erfüllt.
          </p>
          <p>
            Eigentlich können wir froh sein, dass es die initiale Idee bzw.
            Planung nicht geworden ist. Mit der Zeit habe ich nämlich enorm viel
            gelernt. Nur durch das mehrfache Planen und immer wieder
            Durchdenken, Rekapitulieren und Revalidieren verschiedener Aspekte
            konnte das jetzige Studio entstehen.
          </p>
        </div>

        <div className={layoutStyles.contentText}>
          {disciplines.map(item => {
            return (
              <div className={layoutStyles.discipline}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>

        <div style={{ marginBottom: "100px" }}></div>
      </div>
    </section>

    {/* SECTION D: Hard Numbers 2 */}
    <section id="section-d">
      <div
        className={layoutStyles.contentWrap}
        style={{
          backgroundImage: `url(${patch})`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          borderRadius: "25px",
          paddingTop: "50px",
        }}
      >
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Grid
              container
              justify="center"
              className={layoutStyles.factsContainer}
            >
              {hardNumbers2.map(item => {
                return (
                  <Grid item xs={6} className={layoutStyles.fact}>
                    <div className={layoutStyles.card2}>
                      <h3>{item.value}</h3>
                      <h4>{item.unit}</h4>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6}>
            <div className={layoutStyles.sideFacts}>
              <h2>
                Viel hilft viel: <br /> Ein Projekt der großen Zahlen
              </h2>
              <p>
                Nicht nur von der schieren Masse an verschiedenen Disziplinen,
                die es beim Studiobau zu beachten gilt, sondern auch von der
                schieren Masse an... Masse ist dieses Projekt einfach riesig.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>

    {/* SECTION E: CALL TO ACTION */}
    <section>
      <div className={layoutStyles.contentWrap}>
        <h2 id="section-e" style={{ padding: 0 }}>
          Und?
        </h2>
        <h3 className={layoutStyles.question}>Lust was zusammen zu machen?</h3>
        <div className={layoutStyles.centered}>
          <Link to="/blog">
            <button type="button" className={layoutStyles.button}>
              <span>Kontakt</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
