module.exports = {
  siteMetadata: {
    title: `audiophil`,
    description: `Modernes, akustisch optimiertes Tonstudio in Erfurt`,
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
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
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
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "https://studio.backend.hosting122542.a2fc7.netcup.net",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        auth: {
          htaccess_user: "your-htaccess-username",
          htaccess_pass: "your-htaccess-password",
          htaccess_sendImmediately: false
        },
        cookies: {},
        verboseOutput: false,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        },
        concurrentRequests: 100,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/media",
          "**/tags"
        ],
        keepMediaSizes: false,
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142374149-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "audiophil.netlify.com",
      }
    }
  ],
}
