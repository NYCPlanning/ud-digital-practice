import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/default';

export default function Template({ data }) {
  const { markdownRemark, site } = data
  const { siteMetadata } = site
  const { html } = markdownRemark // frontmatter is available here too

  return (
    <Layout siteMetadata={siteMetadata}>
      <div className="col-span-3" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;