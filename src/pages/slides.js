import React from 'react';
import { graphql, Link } from 'gatsby';

const SlideDeckList = ({ data }) => {
  if (!data) return null;

  const { allSitePage: { edges: decks }} = data;
  const sorter = (a, b) => (
    a.node.context.frontmatter.date > b.node.context.frontmatter.date
  );
  decks.sort(sorter);

  const deckList = decks.map(({ node }, i) => (
    <li key={i} className='flex justify-between pb-2'>
      <Link to={node.path}>{node.context.frontmatter.title}</Link>
      <span>{node.context.frontmatter.date}</span>
    </li>
  ));

  return (
    <div className='w-full h-full p-8'>
      <h1>Slide Decks</h1>
      <br/>
      <ul>
        {deckList}   
      </ul>
    </div>
  )
}

export default SlideDeckList

export const query = graphql`
  query SlideDeckQuery {
    allSitePage(filter: {path: {glob: "/slides/*"}}) {
      edges {
        node {
          path
          context {
            frontmatter {
              date
              desc
              title
            }
          }
        }
      }
    }
  }
`;