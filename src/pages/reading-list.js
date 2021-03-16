import React from 'react'
import Layout from '../layouts/default'
import ReadingList from '../components/reading_list'

const ReadingListPage = () => {
  return (
    <Layout mask={true}>
      <ReadingList />
    </Layout>
  )
}

export default ReadingListPage