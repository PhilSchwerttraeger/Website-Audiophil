module.exports = {
  siteMetadata: {
    title: `audiophil`,
    description: `Modernes und akustisch optimiertes Tonstudio in Erfurt; Inhaber: Philipp Schwetschenau`,
    email: "hello@audiophilproduction.de",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `audiophil`,
        short_name: `audiophil`,
        start_url: `/`,
        background_color: `#49697B`,
        theme_color: `#49697B`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
