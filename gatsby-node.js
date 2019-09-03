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