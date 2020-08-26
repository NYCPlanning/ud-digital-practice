const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const Debug = require(`debug`)
const pkg = require('./package.json')

const debug = Debug(pkg.name)

let basePath
let contentPath

const deckTemplate = require.resolve(`./src/templates/deck`)
const pageTemplate = require.resolve('./src/templates/page')

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

const resolveTitle = async (...args) => {
  const headings = await mdxResolverPassthrough('headings')(...args)
  const [first = {}] = headings
  return first.value || ''
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes(
    schema.buildObjectType({
      name: `Deck`,
      fields: {
        id: { type: `ID!` },
        slug: {
          type: `String!`,
        },
        title: {
          type: 'String!',
          resolve: resolveTitle,
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
    })
  )
}

exports.createPages = async ({ graphql, actions, reporter, pathPrefix }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              title
              date
              desc
            }
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            html
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { allMdx, allMarkdownRemark } = result.data
  const decks = allMdx.edges
  const pages = allMarkdownRemark.edges // could filter by path, edges.filter(e => e.node.fileAbsolutePath.includes('pages'));

  decks.forEach(({ node }, index) => {
    const slug = [pathPrefix, 'slides', node.slug].filter(Boolean).join('/') // or to manually specify for each, node.frontmatter.slug;
    const matchPath = [slug, '*'].join('/')

    createPage({
      // path: node.slug,
      path: slug,
      matchPath,
      component: deckTemplate,
      context: {
        ...node,
        slug,
      },
    })

    createPage({
      path: slug + '/print',
      component: deckTemplate,
      context: {
        ...node,
        slug,
      },
    })
  })

  pages.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: pageTemplate,
      context: {
        layout: "default",
        slug: node.frontmatter.slug,
      },
    })
  });
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createParentChildLink } = actions

  const toPath = node => {
    const { dir } = path.posix.parse(node.relativePath)
    return path.posix.join(basePath, dir, node.name)
  }

  if (node.internal.type !== `Mdx`) return

  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type !== `Mdx` || source !== contentPath) return

  const slug = toPath(fileNode)
  const id = createNodeId(`${node.id} >>> Deck`)

  createNode({
    slug,
    // Required fields.
    id,
    parent: node.id,
    children: [],
    internal: {
      type: `Deck`,
      contentDigest: createContentDigest(node.rawBody),
      content: node.rawBody,
      description: `Slide Decks`,
    },
  })
  createParentChildLink({ parent: fileNode, child: getNode(id) })
}

exports.onCreateDevServer = ({ app }) => {
  if (typeof process.send !== 'function') return
  process.send({
    mdxDeck: true,
  })
}
