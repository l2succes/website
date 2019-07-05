/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    console.log(node.internal.type)
    const slug = createFilePath({ node, getNode, basePath: `content/blog` })
    console.log('\n', slug)
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log('\n', node)
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/BlogPost.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}
