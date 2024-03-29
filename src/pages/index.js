import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"

import Layout from "../layout/layout"
import layoutStyles from "../layout/layout.module.scss"
import SEO from "../components/seo"
import patch from "../images/patch.png"

const hardNumbers = [
  {
    title: "100 m²",
    subtitle: "Gebäudefläche",
    text: "Aufgeteilt in <b>5 Räume</b>: Regie, Aufnahme, Lobby, WC und Hausanschluss. Genug Platz für kleine und mittlere Produktionen.",
  },
  {
    title: "3,80 m",
    subtitle: "Raumhöhe",
    text:
      "Für ein großes <b>Raumvolumen</b>, besser verteilte Raummoden und natürlich die Möglichkeit flexibel auch mal von oben zu mikrofonieren.",
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
      "Hinter dem Gebäude befindet sich eine Außenanlage mit Terrasse, Grill und <b>Pool</b>. Ideal zur Entspannung und Abendgestaltung.",
  },
  {
    title: "ab 38 Hz",
    subtitle: ">60dB",
    text:
      "Mit unserer speziellen Inside-Out <b>Raum-in-Raum-Konstruktion</b> erreichen wir ab 38Hz aufwärts eine Schallreduktion von über 60dB.",
  },
]

const disciplines = [
  {
    title: "Schalldämmung",
    text:
      "Durch unsere Inside-Out Raum-in-Raum-Konstruktion erreichen wir hohe akustische Dämmwerte, welche <b>ideale Aufnahme- und Abhörumgebungen</b> schaffen. Durch diese Isolation lässt sich Material bereits bei der Aufnahme optimal über die Monitore bewerten.",
  },
  {
    title: "Variable Akustik",
    text:
      "Diverse selbst entwickelte Akustikelemente schaffen eine <b>flexible Raumakustik</b>, die sich individuell an alle möglichen künstlerischen Anforderungen anpassen lässt. Von knochentrocken bis sehr räumlich.",
  },
  {
    title: "LED und Sternerdung",
    text:
      "Um möglichst viele Störeinflüsse wie elektrische Felder und Netzteilsurren zu eliminieren, setzen wir konsequent auf <b>LED-Beleuchtung mit Niedervoltspeisung</b> und separate <b>Sternerdung</b> aller Studiogeräte.",
  },
  {
    title: "Gebäudetechnik",
    text:
      "Das Gebäude ist <b>KNX-vernetzt</b> und bietet Vorzüge wie voll-automatisierte Lüftung, Klima/Heizung und Lichtsysteme. Zudem hat das Gebäude eine Photovoltaikanlage mit großen Akkus, um <b>100% autark aus erneuerbaren Energien</b> betrieben zu werden.",
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

const IndexPage = () => {
  return (
    <Layout type="hero">
      <SEO title="audiophil" />

      {/* SECTION A: WELCOME */}
      <section id="welcome" className={layoutStyles.section}>
        <div className={layoutStyles.contentWrap}>
          <h2>Hallo Internet!</h2>
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
      <section id="features" className={layoutStyles.section}>
        <div
          className={layoutStyles.contentWrap}
          style={{
            backgroundImage: `url(${patch})`,
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
            borderRadius: "25px",
          }}
        >
          <h2 className={layoutStyles.featuresTitle}>
            Harte Zahlen
        </h2>
          <Grid
            container
            justify="center"
            className={layoutStyles.featureContainer}
          >
            {hardNumbers.map(item => {
              return (
                <Grid
                  key={item.title}
                  item
                  xs={6}
                  md={3}
                  className={layoutStyles.feature}
                >
                  <div className={layoutStyles.card}>
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </section>

      {/* SECTION C: DREAM */}
      <section id="waslangewaehrt" className={layoutStyles.section}>
        <div className={layoutStyles.contentWrap}>
          <h2>Was lange währt, wird endlich gut.</h2>
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

          <div className={layoutStyles.disciplines}>
            {disciplines.map(item => {
              return (
                <div
                  key={item.title}
                  className={layoutStyles.discipline}
                >
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION D: Hard Numbers 2 */}
      <section id="vielhilftviel" className={layoutStyles.section}>
        <div
          className={layoutStyles.contentWrap}
          style={{
            backgroundImage: `url(${patch})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            borderRadius: "25px",
            paddingTop: "20px",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Grid
                container
                justify="center"
                className={layoutStyles.factsContainer}
              >
                {hardNumbers2.map(item => {
                  return (
                    <Grid
                      key={item.value}
                      item xs={6}
                      className={layoutStyles.fact}
                    >
                      <div className={layoutStyles.card2}>
                        <h3>{item.value}</h3>
                        <h4>{item.unit}</h4>
                      </div>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={layoutStyles.sideFacts}>
                <h2>
                  Viel hilft viel: <br /> Ein Projekt der großen Zahlen
              </h2>
                <p>
                  Nicht nur von der schieren Masse an verschiedenen Disziplinen, sondern auch von der schieren Masse an... <b>Masse</b> ist dieses Projekt einfach riesig.
              </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      {/* SECTION E: CALL TO ACTION */}
      <section id="section-e" className={layoutStyles.section}>
        <div className={layoutStyles.contentWrap}>
          <h2 id="section-e" style={{ padding: "80px 0px 0px" }}>
            Und?
        </h2>
          <h3 className={layoutStyles.question}>Lust was zusammen zu machen?</h3>
          <div className={layoutStyles.centered}>
            <Link to="/contact">
              <button type="button" className={layoutStyles.button}>
                <span>Kontakt</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
