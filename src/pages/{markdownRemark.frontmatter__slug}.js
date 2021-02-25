import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        date
        description
        title
      }
      html
      rawMarkdownBody
      timeToRead
    }
  }
`

const Page = ({data: { markdownRemark: { html, timeToRead, frontmatter}}}) => {
  // frontmatter: { date, description, title }
  console.log(html)
  return (
    <Layout>
      <div className='col-span-3' dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Page
