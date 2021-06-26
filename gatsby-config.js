module.exports = {
  siteMetadata: {
    title: `Backtoroad Autoparts`,
    description: `BackToRoad Auto Parts is your one-stop shop for tested high quality used OEM parts to customers in all 50 states and worldwide`,
    author: `@backtoroad`,
    noindex: `noindex`,
    siteUrl: 'https://backtoroadprojectnanirama.gatsbyjs.io'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
        options: {
          url: `http://stockeye.in/graphql`
        }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
        createLinkInHead: true,
      }      
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://backtoroadprojectnanirama.gatsbyjs.io/',
        sitemap: 'https://backtoroadprojectnanirama.gatsbyjs.io/sitemap/sitemap-0.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: `${__dirname}/src/assets/images`,
    //     }
    //   }
    // }
    // // Simple config, passing URL
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "WORDPRESS",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "wordpress",
    //     // Url to query from
    //     url: "http://stockeye.in/graphql",
    //   },
    // },
  ],
}
