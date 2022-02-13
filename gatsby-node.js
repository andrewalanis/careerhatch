const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulBlog {
        nodes {
          title
          description {
            description
          }
          image {
            file {
              fileName
              url
            }
          }
          date
        }
      }
    }
  `)
  result.data.allContentfulBlog.nodes.forEach(item => {
    createPage({
      path: `/blogs/${item.title}`,
      component: path.resolve("./src/components/Template/BlogDisplay.js"),
      context: {
        data: item,
      },
    })
  })
}
