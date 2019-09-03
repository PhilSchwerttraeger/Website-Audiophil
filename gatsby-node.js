const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blogpost.js")

  // 2. Get markdown data
  const res = await graphql(`
    query{
      allWordpressPost{
        edges{
          node{
            title
            date
            excerpt
            slug
            id
          }
        }
      }
    }    
  `)

  // 3. Create new pages
  res.data.allWordpressPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })



}