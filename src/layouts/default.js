import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/nav'
import SiteTitle from '../components/site_title'

const Layout = ({ children, siteMetadata }) => {
  return(
    <div id='root' className="grid grid-cols-1 md:grid-cols-4 p-8">
     <div className='mb-8'>
      <Nav siteMetadata={siteMetadata} />
     </div>
     <div id='article-column' className='md:col-start-2 md:col-span-2 w-pro'>
      {children}
      <div className='h-16'/>
     </div>
     <SiteTitle />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout