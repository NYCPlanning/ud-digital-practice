import React from 'react'
import Layout from '../layouts/default'

// https://ud-interactive.netlify.app/residential-buildings

const Index = () => {
  return (
    <Layout>
      <iframe
        className='fixed top-0 left-0 w-full h-full z-0'
        src='https://ud-interactive.netlify.app/doc-site-landing' 
      />
    </Layout>
  )
}

export default Index