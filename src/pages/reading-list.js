import React, { useState, useEffect } from 'react'

const ZOTERO_URL = 'https://api.zotero.org/groups/2468490/items/top?key=UYzWlLfrVfaAhoaxKcTzbqep&include=bib&linkwrap=1'

const replaceLinks = (htmlString) => {
  const linkRe = />([\w\:\/\-\.]*)<\/a>/
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

// curl "https://api.zotero.org/groups/2468490/items?key=UYzWlLfrVfaAhoaxKcTzbqep"