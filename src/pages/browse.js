import React from 'react'
import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks'
import { selectionMap } from '../utils'
import { useAuthListener } from '../hooks'
export default function Browse() {
  const { user } = useAuthListener()
  const { series } = useContent('series')
  const { films } = useContent('films')
  const slides = selectionMap({ series, films })

  return (
    <BrowseContainer
      slides={slides}
      currentUser={user ? user.displayName : ''}
      currentPhoto={user ? user.photoURL : ''}
    />
  )
}
