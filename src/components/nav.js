import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteMetadata }) => {
  const { title } = siteMetadata

  return (
    <div className='flex flex-col'>
      <h1>{title}</h1>
      <p>---</p>

      <Link activeClassName='link-active' to='/'>Inside Link</Link>
      <a href='https://www.example.com'>Outside Link</a>
    </div>
  )
};

export default Header;