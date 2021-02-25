require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: { QUERY_ON_DEMAND: true },
  siteMetadata: {
    title: `Urban Design Digital Practice`,
    name: `Author`,
    description: `Documentation, tutorials and resources for NYC Planning's Urban Design Digital Practice Initiative`,
    author: `NYC Planning Urban Design Office`,
    date: `2021-02-24`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-jsx`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gis-2020`,
        short_name: `gis`,
        start_url: `/`,
        icon: `${__dirname}/content/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // IMAGES + ASSETS, GENERAL
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content`,
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
