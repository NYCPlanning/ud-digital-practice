import React from 'react';

export default (elements) => {
  const textTypes = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li']
  let images = []
  let text = []
  
  React.Children.toArray(elements).forEach((child, i) => {
    if (child.props.className === 'gatsby-resp-image-wrapper' || child.props.mdxType === 'img') {
      images.push(child)
    } else if (textTypes.includes(child.props.mdxType)) {
      text.push(child);
    }
  })

  return {text: text, images: images}
}