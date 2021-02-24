import React, { useState, useEffect } from 'react'

import Layout from '../layouts/default'

const ZOTERO_URL = `${process.env.ZOTERO_LIBRARY_URL}/items/top?&include=bib&linkwrap=1&key=${process.env.ZOTERO_KEY}`

const replaceLinks = (htmlString) => {
  const linkRe = />([\w:/.-]*)<\/a>/
  const html = htmlString.replace(
    linkRe,
    'target="_blank" >link</a>'
  )
  return html
}

const ReadingList = () => {
  const [state, setState] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(ZOTERO_URL).then(
        res => res.json()
      ).then( json => {
          setState(json)
          setLoading(false)
      }).catch(err => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error fetching data :(</div>

  console.log(state)
  const listItems = state.sort()
    .map(({ bib }) => ( replaceLinks(bib) ))
    .map((html, i) => (
      <div key={i} dangerouslySetInnerHTML={{__html: html}} />
    ))

  return (
    <div className='flex flex-col space-y-4'>{listItems}</div>
  )
}

export default ReadingList
