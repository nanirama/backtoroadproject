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
            path: `${node.makemodels.nodes[0].slug}/${node.slug}`,
            component: path.resolve("./src/templates/landing-template.js"),
            context: {
              id: node.id,
              mid: node.makemodels.nodes[0].id
            },
        })
    })
}