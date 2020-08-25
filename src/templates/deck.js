import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Deck from '../components/deck';
import splitSlides from '../utils/split-slides';
import '../style/deck.css';

export const pageQuery = graphql`
  query($id: String!) {
    mdx: mdx(id: { eq: $id }) {
      id
      body
    }
  }
`

const wrapper = props => {
  const slides = splitSlides(props)
  return <Deck {...props} slides={slides} />
}

const components = { wrapper }
// const shortcodes = { SlideTextImage }

export default ({
  data: {
    mdx: { id, body },
  },
  ...props
}) => {
  const Component = props => {
    return <MDXRenderer {...props} children={body} />
  }

  return (
    <Component {...props} components={components} />
  )
}