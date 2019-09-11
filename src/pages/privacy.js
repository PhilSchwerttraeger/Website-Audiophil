import React from "react"

import Layout from "../layout/layout"
import styles from "./privacy.module.scss"
import SEO from "../components/seo"

const ImprintPage = () => (
  <Layout>
    <main className={styles.main}>
      <SEO title="Home" />
      <h1>Datenschutz</h1>

      <h2>Eingebettete Inhalte von anderen Websites</h2>
      <p>
        Beiträge auf dieser Website können eingebettete Inhalte beinhalten (z. B. Videos, Bilder, Beiträge etc.). Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob der Besucher die andere Website besucht hätte.<br /><br />

        Diese Websites können Daten über dich sammeln, Cookies benutzen, zusätzliche Tracking-Dienste von Dritten einbetten und deine Interaktion mit diesem eingebetteten Inhalt aufzeichnen, inklusive deiner Interaktion mit dem eingebetteten Inhalt, falls du ein Konto hast und auf dieser Website angemeldet bist.
      </p>

      <h2>Analysedienste</h2>
      <p>Wir verwenden Google Analytics, um die Website-Nutzung zu analysieren. Die daraus gewonnenen Daten werden genutzt, um unsere Website zu optimieren.&nbsp;</p>

      <p>Google Analytics ist ein Webanalysedienst, der von&nbsp;<em>Google Inc.</em>&nbsp;(1600 Amphitheatre Parkway, Mountain View, CA 94043, United States) betrieben und bereitgestellt wird. Google verarbeitet die Daten zur Website-Nutzung in unserem Auftrag und verpflichtet sich vertraglich zu Maßnahmen, um die Vertraulichkeit der verarbeiteten Daten zu gewährleisten.</p>

      <p>Während Ihres Website-Besuchs werden u.a. folgende Daten aufgezeichnet:</p>

      <ul>
        <li>Aufgerufene Seiten</li>
        <li>Ihr Verhalten auf den Seiten&nbsp;(beispielsweise Klicks, Scroll-Verhalten und Verweildauer)</li>
        <li>Ihr ungefährer Standort (Land und Stadt)</li>
        <li>Ihre IP-Adresse (gekürzte Form, sodass keine eindeutige Zuordnung möglich ist)</li>
        <li>Technische Informationen wie Browser, Internetanbieter, Endgerät und Bildschirmauflösung</li>
        <li>Herkunftsquelle Ihres Besuchs (d.h. über welche Website bzw. über welches Werbemittel Sie zu uns gekommen sind)</li>
      </ul>

      <p>Diese Daten werden an einen Server von Google in den USA übertragen. Google beachtet dabei die Datenschutzbestimmungen des „EU-US Privacy Shield“-Abkommens.</p>

      <p>Google Analytics speichert Cookies in Ihrem Webbrowser für die Dauer von zwei&nbsp;Jahren seit Ihrem letzten Besuch. Diese Cookies enthaltene eine zufallsgenerierte User-ID, mit der Sie bei zukünftigen Website-Besuchen wiedererkannt werden können.</p>

      <p>Die aufgezeichneten Daten werden zusammen mit der zufallsgenerierten User-ID gespeichert, was die Auswertung pseudonymer Nutzerprofile ermöglicht.&nbsp;Diese nutzerbezogenen Daten werden automatisch nach 14 Monaten gelöscht.&nbsp;Sonstige Daten bleiben in aggregierter Form unbefristet gespeichert.</p>

      <p>Sollten Sie mit der Erfassung nicht einverstanden sein, können Sie diese mit der einmaligen Installation des&nbsp;<a href="https://tools.google.com/dlpage/gaoptout?hl=de">Browser-Add-ons zur Deaktivierung von Google Analytics</a>&nbsp;unterbinden.</p>

      <h3>Wie lange wir deine Daten speichern</h3>

      <p>Wenn du einen Kommentar schreibst, wird dieser inklusive Metadaten zeitlich unbegrenzt gespeichert. Auf diese Art können wir Folgekommentare automatisch erkennen und freigeben, anstelle sie in einer Moderations-Warteschlange festzuhalten.</p>

      <p>Für Benutzer, die sich auf unserer Website registrieren, speichern wir zusätzlich die persönlichen Informationen, die sie in ihren Benutzerprofilen angeben. Alle Benutzer können jederzeit ihre persönlichen Informationen einsehen, verändern oder löschen (der Benutzername kann nicht verändert werden). Administratoren der Website können diese Informationen ebenfalls einsehen und verändern.</p>
    </main>
  </Layout>
)

export default ImprintPage
