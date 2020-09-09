import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteMetadata }) => {
  const { title, author } = siteMetadata
  return (
    <div className='title h-32 self-start'>
      <Link to='/'><h1>{title}</h1></Link>
      <small>A project of NYC Planning's {author}</small>
    </div>
  )
};

export default Header;