const _l = require('lodash');
const Promise = require('bluebird');
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {

     graphql(`
        query{
            allPosts : allWpPost {
              edges {
                node {
                  id
                  slug
                }
              }
            }
            allPpc : allWpPpc {
                edges {
                  node {
                    id
                    uri
                  }
                }
              }
            allParts : allWpPart {
                edges {
                    node {
                    id
                    uri
                    makemodels {
                        nodes {
                        id
                        slug
                        }
                    }
                    }
                }
            }
            allMParts : allWpMpart {
                edges {
                    node {
                    id
                    uri
                    makemodels {
                        nodes {
                        id
                        slug
                        }
                    }
                    }
                }
            }
            allMdParts : allWpMdpart {
                edges {
                    node {
                    id
                    uri
                    makemodels {
                        nodes {
                        id
                        slug
                        }
                    }
                    }
                }
            }
            allMakes : allWpMakemodel(filter: {parentId: {eq: null}}) {
                edges {
                  node {
                    name
                    id
                    slug
                  }
                }
            }
            allModels : allWpMakemodel(filter: {parentId: {ne: null}}) {
                edges {
                  node {
                    name
                    id
                    slug
                  }
                }
            }
            allWpCategory {
              edges {
                node {
                  id
                  slug
                  posts {
                    nodes {
                      id
                    }
                  }
                }
              }
            }
        }      
    `).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
       
    const postsPerPage = 12
    _l.each(result.data.allWpCategory.edges, (edge) => {
      let posts = edge.node.posts.nodes
      let numPages = Math.ceil(posts.length / postsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog/${edge.node.slug}` : `/blog/${edge.node.slug}/${i + 1}`,
          component: path.resolve("./src/templates/blog-category-template.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            id: edge.node.id
          },
          })
        })
      })

      const posts = _l.cloneDeep(result.data.allPosts.edges);
      const numPages = Math.ceil(posts.length / postsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-list-template.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
      })
      _l.each(result.data.allPosts.edges, (edge) => {
        createPage({
            path: `${edge.node.slug}`,
            component: path.resolve("./src/templates/blog-template.js"),
            context: {
              id: edge.node.id
            },
        })
      })
      _l.each(result.data.allPpc.edges, (edge) => {
        createPage({
            path: `${edge.node.uri}`,
            component: path.resolve("./src/templates/ppc-template.js"),
            context: {
              id: edge.node.id
            },
          })
        })  
      _l.each(result.data.allParts.edges, (edge) => {
        createPage({
            path: `${edge.node.uri}`,
            component: path.resolve("./src/templates/part-template.js"),
            context: {
              id: edge.node.id
            },
        })
      })
      _l.each(result.data.allMdParts.edges, (edge) => {
        createPage({
          path: `${edge.node.uri}`,
            component: path.resolve("./src/templates/model-part-template.js"),
            context: {
              id: edge.node.id
            },
        })
      })
      _l.each(result.data.allMParts.edges, (edge) => {
        createPage({
          path: `${edge.node.uri}`,
            component: path.resolve("./src/templates/make-part-template.js"),
            context: {
              id: edge.node.id
            },
        })
      })
      _l.each(result.data.allMakes.edges, (edge) => {
        createPage({
            path: `${edge.node.slug}`,
            component: path.resolve("./src/templates/make-template.js"),
            context: {
              id: edge.node.id
            },
        })
      })
      _l.each(result.data.allModels.edges, (edge) => {
        createPage({
            path: `${edge.node.slug}`,
            component: path.resolve("./src/templates/model-template.js"),
            context: {
              id: edge.node.id
            },
        })
      })
      resolve();
    });
  })
}