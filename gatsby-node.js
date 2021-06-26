/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

     const { data } = await graphql(`
        query{
            allParts : allWpPart {
            edges {
                node {
                id
                slug
                makemodels {
                    nodes {
                    id
                    slug
                    }
                }
                }
            }
            }
        }      
    `)
    data.allParts.edges.forEach(({ node }) => {      
        createPage({
            path: `used-${node.slug}`,
            component: path.resolve("./src/templates/parts-template.js"),
            context: {
              id: node.id,
              mid: node.makemodels.nodes[0].id
            },
        })
    })
}