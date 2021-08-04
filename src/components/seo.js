/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 function Seo({ description, lang, meta, title, cpath, pimage, schema, noindex }) {
   const { site, SiteLogo } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
             siteUrl
           }
         }
         SiteLogo: file(relativePath: {eq: "landing/logo.png"}) {
          publicURL
        }
       }
     `
   )
   const metaDescription = description || site.siteMetadata.description
   const siteURL = site.siteMetadata.siteUrl 
   const siteTitle = title || site.siteMetadata.title
   const curl = siteURL+cpath || ''
   const siteLogo = siteURL+SiteLogo.publicURL;
   const pImage = pimage && pimage !=='' ? siteURL+pimage : siteLogo
   //console.log('Site Logo ', pImage);
   //console.log('Page Title', siteTitle);
   return (
     <Helmet      
        htmlAttributes={{
          lang
        }}
        title={siteTitle}
        titleTemplate={siteTitle}
      >
       <meta name="description" content={metaDescription} />
       <meta name="image" content={pImage} />

       <meta name="og:locale" content={lang} />
       <meta name="og:title" content={siteTitle} />
       <meta name="og:url" content={curl} />
       <meta name="og:description" content={metaDescription} />
       <meta name="og:type" content="website" />
       <meta name="og:image" content={pImage} />

       <meta name="twitter:card" content="summary" />
       <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
       <meta name="twitter:description" content={metaDescription} />
       <meta name="twitter:url" content={curl} />
       <meta name="twitter:image" content={pImage} />
       {noindex === 'noindex' && <meta name="robots" content="noindex, nofollow"></meta>}
       {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
       {cpath && <link rel="canonical" href={`${siteURL}${cpath}`} />}
     </Helmet>
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object)
 }
 
 export default Seo
 