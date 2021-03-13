import React from 'react'
import { Link } from 'gatsby'

const SiteTitle = () => {
  return (
    <div className='gradient-bg fixed bottom-0 left-0 w-full p-4 pt-8 flex space-x-4'>
        <div>
          <img
            width='72em'
            src='https://raw.githubusercontent.com/NYCPlanning/dcp-logo/master/dcp_logo.svg' 
            alt='DCP'
          />
        </div>
        <div>
          <Link to='/'>
            <h1>
              Urban Design Digital Practice
            </h1>
          </Link>
        </div>
    </div>
  )
}

export default SiteTitle
