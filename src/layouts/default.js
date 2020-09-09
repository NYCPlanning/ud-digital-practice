import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/nav';
import Header from '../components/header';
import DCPLogo from '../components/dcpLogo';
import '../style/main.css';

const Layout = ({ children, siteMetadata }) => {
    return(
        <div id='root' className="flex flex-col p-8">
          <div className='gradient-bg' />
          <Header siteMetadata={siteMetadata} />
          <div className='flex'>
            <div className='w-1/3'>
              <Nav siteMetadata={siteMetadata} />
            </div>
            <div id='article-column' className='w-2/3'>
              {children}
            </div>
          </div>
          <DCPLogo />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout