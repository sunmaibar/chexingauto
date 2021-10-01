const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetTags {
      allContentfulAllCars {
        nodes {
          tags {
            tags
          }
        }
      }
    }
  `)
  result.data.allContentfulAllCars.nodes.forEach(car => {
    car.tags.tags.forEach(tag => {
      createPage({
        path: `/tags/${tag}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
