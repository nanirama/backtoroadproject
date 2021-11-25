module.exports = {
  siteMetadata: {
    title: `Backtoroad Autoparts`,
    description: `BackToRoad Auto Parts is your one-stop shop for tested high quality used OEM parts to customers in all 50 states and worldwide`,
    author: `@backtoroad`,
    noindex: `noindex`,
    siteUrl: 'https://btr-dev.sellectricindia.com',
  },
  plugins: [     
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
          webpOptions: {quality: 100}
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
        url: `http://stockeye.in/graphql`,
        timeout: 36000000,
        production: {
          hardCacheMediaFiles: true,
          allow404Images: true,
          hardCacheData: false,
        },
        develop: {
          hardCacheMediaFiles: true,
          allow404Images: true,
          hardCacheData: false,
        },
        schema: {
          requestConcurrency: 5,
          queryDepth: 15,
          perPage: 100,
        },
        debug: {
          timeBuildSteps: true,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 5,
            },
          },
        },
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
              strategy: 'base64' // 'base64' || 'cdn'
            },
          ],
        },
        useMinify: true,
        usePreload: true
      },
    },      
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      }      
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://btr-dev.sellectricindia.com/',
        sitemap: 'https://btr-dev.sellectricindia.com/sitemap/sitemap-0.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://backend.sellectricindia.com/api/','http://stockeye.in'],
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
        resolve: `gatsby-plugin-polyfill-io`,
        options: {
          features: [`Array.prototype.map`, `fetch`]
        },
    }
  ],
}
