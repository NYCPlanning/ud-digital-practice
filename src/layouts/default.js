import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/nav'
import '../style/main.css'

const Layout = ({ children, siteMetadata }) => {
    return(
        <div id='root' className="grid grid-cols-4 gap-8 p-8">
          <Nav siteMetadata={siteMetadata} />
          {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout