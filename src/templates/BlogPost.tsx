import React from 'react'
import { Layout } from '../components/Layout/Blog'
import { Header } from '../components/Header'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Header />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
