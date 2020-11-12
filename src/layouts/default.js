import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/nav';
import Header from '../components/header';
import DCPLogo from '../components/dcpLogo';
import '../style/main.css';

const Layout = ({ children, siteMetadata }) => {
    return(
        <div id='root' className="grid grid-cols-1 md:grid-cols-3 max-w-3xl p-8">
          <div className='col-start-1 md:col-span-3 mb-8'>
            <Header siteMetadata={siteMetadata} />
          </div>
          <div className='mb-8'>
            <Nav siteMetadata={siteMetadata} />
          </div>
          <div id='article-column' className='md:col-start-2 md:col-span-2'>
            {children}
          </div>
          <DCPLogo />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout