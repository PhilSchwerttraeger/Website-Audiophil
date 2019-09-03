const path = require('path')

// Node.js module: function runs when new node is created
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    //console.log('@@@@@@@@@@@@@@', slug)

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blogpost.js")

  // 2. Get markdown data
  const res = await graphql(`
    query{
      allMarkdownRemark{
        edges{
          node{
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  // 3. Create new pages
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })



}