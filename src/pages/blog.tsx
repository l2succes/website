import React from 'react'
import { Link, graphql } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Layout } from '../components/Layout'
import SEO from '../components/SEO'
import { Header } from '../components/Header'
import styled from 'styled-components'

class BlogIndex extends React.Component<any> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Header />
        <Container>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title
            return (
              <div key={node.frontmatter.path}>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex

const Container = styled.div`
  background: white;
  color: black;
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`
