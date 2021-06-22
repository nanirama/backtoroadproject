module.exports = {
  siteMetadata: {
    title: `Backtoroad Autoparts`,
    description: `BackToRoad Auto Parts is your one-stop shop for tested high quality used OEM parts to customers in all 50 states and worldwide`,
    author: `@backtoroad`,
    noindex: `noindex`,
    siteUrl: `https://btr-dev.sellectricindia.com`
  },
  plugins: [  
    `gatsby-plugin-perf-budgets`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          backgroundColor: `transparent`,
          webpOptions: {quality: 50}
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },  
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //     ignore: ['slick-carousel/slick/slick.css', 'slick-carousel/slick/slick-theme.css'], // Ignore files/folders
    //     purgeOnly : ['components/', 'components/landing/css/style.css', 'bootstrap/'], // Purge only these files/folders
    //     purgeCSSOptions: {
    //       // https://purgecss.com/configuration.html#options
    //       safelist: ['my-selector'], // Don't remove this selector
    //     },
    //   },
    // },  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo/logo.png`, // This path is relative to the root of the site.
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
        /*
        * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
        * Example : 'demo.wp-api.org' or 'www.example-site.com'
        */
        url: `http://stockeye.in/graphql`
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["300", "400", "500","600","700","800","900"],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              strategy: 'base64' // 'base64' || 'cdn'
            },
          ],
        },
        //formats: ['woff2', 'woff'],
        useMinify: true,
        usePreload: true,
        //usePreconnect: false,
      },
    },   
    
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap',
        createLinkInHead: true,
        createLinkInHead: true,
      }      
    }

     //"gatsby-plugin-zopfli": "^2.0.0",
    //"gatsby-plugin-htaccess": "^1.4.0",
    //"gatsby-plugin-offline": "^3.10.0",
    //"gatsby-plugin-polyfill-io": "^1.1.0",
    // {
    //   resolve: `gatsby-plugin-polyfill-io`,
    //   options: {
    //      features: [`Array.prototype.map`, `fetch`]
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-zopfli',
    //   options: {
    //     extensions: ['css', 'html', 'js', 'webp','jpg','png'],
    //     path: 'zopfli',
    //     compression: {
    //       numiterations: 25
    //     },
    //     verbose: true
    //   }
    // },
    // {
    //     resolve: 'gatsby-plugin-htaccess',
    //     options: {
    //       custom: `
    //       <IfModule mod_headers.c>
    //           <FilesMatch "\.(jpg|webp)$">
    //               Header set Cache-Control "public, max-age=31536000, immutable"
    //           </FilesMatch>
    //       </IfModule>
    //       `,
    //     },
    //   }
    //  {
    //     resolve: "gatsby-plugin-sitemap",
    //     options: {
    //       exclude: [
    //         `/404`,
    //         `/404.html`
    //       ],        
    //       createLinkInHead: true,
    //       sitemapSize: Infinity,
    //       query: `
    //       {
    //         allSitePage {
    //           nodes {
    //             path
    //           }
    //         }
    //         allWpContentNode(filter: {nodeType: {in: ["Part", "Page"]}}) {
    //           nodes {
    //             ... on WpPart {
    //               uri
    //               modifiedGmt
    //             }
    //           }
    //         }
    //       }
    //     `,
    //       resolveSiteUrl: () => `https://btr-dev.sellectricindia.com`,
    //       resolvePages: ({
    //         allSitePage: { nodes: allPages },
    //         allWpContentNode: { nodes: allWpNodes },
    //       }) => {
    //         const wpNodeMap = allWpNodes.reduce((acc, node) => {
    //           const { uri } = node
    //           acc[uri] = node
  
    //           return acc
    //         }, {})
  
    //         return allPages.map(page => {
    //           return { ...page, ...wpNodeMap[page.path] }
    //         })
    //       },
    //       serialize: ({ path, modifiedGmt }) => {
    //         return {
    //           url: path,
    //           lastmod: modifiedGmt,
    //         }
    //       },
    //     },
    //   },
  ],
}
