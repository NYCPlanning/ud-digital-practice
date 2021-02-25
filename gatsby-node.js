// const Debug = require(`debug`)
// const pkg = require('./package.json')

// const debug = Debug(pkg.name)

// let basePath
// let contentPath

// const pageTemplate = require.resolve('./src/templates/page')

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fileAbsolutePath
//             html
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panic(result.errors)
//   }

//   const { allMarkdownRemark } = result.data
//   const pages = allMarkdownRemark.edges // could filter by path, edges.filter(e => e.node.fileAbsolutePath.includes('pages'));

//   pages.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.slug,
//       component: pageTemplate,
//       context: {
//         layout: "default",
//         slug: node.frontmatter.slug,
//       },
//     })
//   });
// }
