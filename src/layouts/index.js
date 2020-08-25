import React from 'react'
import DefaultLayout from './default'
import SlideLayout from './slideLayout'

export default ({ children, pageContext }) => {
  if (pageContext.layout === "slideLayout") {
    return <SlideLayout>{children}</SlideLayout>
  }
  return <DefaultLayout>{children}</DefaultLayout>
}