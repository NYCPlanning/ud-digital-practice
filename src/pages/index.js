import React from 'react'
import Layout from '../layouts/default'

const Index = () => {
  return (
    <Layout mask={false} >
      <iframe 
        src='https://ud-interactive.netlify.app/doc-site-landing/'
        className='fixed top-0 left-0 w-full h-full z-0 pointer-events-none'
      />
    </Layout>
  )
}

export default Index