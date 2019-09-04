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
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "https://studiobau.philippschwetschenau.de",
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
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
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          //"**/media",
          "**/tags"
        ],
        keepMediaSizes: false,
        normalizer: function ({ entities }) {
          return entities
        },
      },
    }
  ],
}
