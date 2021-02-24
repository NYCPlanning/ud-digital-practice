require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: `/ud-digital-practice`,
  siteMetadata: {
    title: `Digital Practice Initiative`,
    name: `Author`,
    description: `Brief description of your site`,
    author: `Urban Design Office`,
    date: `2020-08-00`,
  },
  plugins: [
    `gatsby-plugin-styled-jsx`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gis-2020`,
        short_name: `gis`,
        start_url: `/`,
        icon: `${__dirname}/content/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // IMAGES + ASSETS, GENERAL
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    // HANDLES PAGES + LINKED MEDIA THROUGH REMARK TRANSFORMER ETC
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-mermaid`,
            options: {
              language: 'mermaid',
              theme: 'base',
              mermaidOptions: {
                flowchart: {
                  useMaxWidth: true,
                  htmlLabels: false,
                },
              },
            },
          },
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
  ],
}
