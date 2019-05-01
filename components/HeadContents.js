import React, { Fragment } from 'react'
import { Head } from 'mdx-deck'
import ExLink from './ExLink'

const TWITTER_ACCOUNT = '@yamatatsu193'

export default props => {
  const {
    title,
    description = `やまたつ(${TWITTER_ACCOUNT})のスライド`,
    urlPath,
    image,
  } = props
  const url = `https://slides.yamatatsu193.net/${urlPath}/`
  const imageUrl = `${url}${image}`
  return (
    <Fragment>
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Yamatatsu Slide" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="fb:app_id" content="595262567660316" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon-152x152.png"
        sizes="152x152"
      />
      <link
        rel="icon"
        href="/android-chrome-192x192.png"
        sizes="192x192"
        type="image/png"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Fragment>
  )
}
