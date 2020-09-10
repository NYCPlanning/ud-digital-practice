module.exports = {
  pathPrefix: "/ud-digital-practice",
  siteMetadata: {
    title: `Digital Practice Initiative`,
    name: `Author`,
    description: `Brief description of your site`,
    author: `Urban Design Office`,
    date: `2020-08-00`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/content/slides/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: ['jpg', 'png'],
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              disableBgImage: true,
              disableBgImageOnAlpha: true,
              linkImagesToOriginal: false,
              backgroundColor: 'none',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [],
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              backgroundColor: `transparent`,
              wrapperStyle: `width: 100%; height: 100%; object-fit: contain;`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gis-2020`,
        short_name: `gis`,
        start_url: `/`,
        icon: `content/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`
  ],
}
