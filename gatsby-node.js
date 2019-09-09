const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // BLOG POST PAGES
  // 1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blogpost.js")

  // 2. Get data
  const res = await graphql(`
    query{
      allWordpressPost{
        edges{
          node{
            title
            date(formatString: "DD. MMMM YYYY", locale: "de")
            excerpt
            slug
            id
            categories{
              name
            }
          }
        }
      }
    }    
  `)

  //console.log(res);

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

  // CATEGORY PAGES
  // 1. Get path to template
  const categoryTemplate = path.resolve("./src/templates/categorypage.js")

  // 2. Get data
  const resCategories = await graphql(`
    query{
      allWordpressCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  /*
  resCategories.data.allWordpressCategory.edges.map(edge => {
    console.log(edge.node.slug);
  })
  */

  // 3. Create new pages
  resCategories.data.allWordpressCategory.edges.forEach((edge) => {
    createPage({
      component: categoryTemplate,
      path: `/category/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}