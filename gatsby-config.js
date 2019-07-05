module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    description: '',
    author: 'Luc Succès',
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // `gatsby-remark-prismjs`,
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/ls-icon-solid.png`,
        appName: 'Luc Succès',
        background: '#000',
      },
    },
  ],
}
