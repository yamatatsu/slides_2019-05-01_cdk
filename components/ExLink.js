import React, { Fragment } from 'react'
import { Head } from 'mdx-deck'

const TWITTER_ACCOUNT = '@yamatatsu193'

export default function ExLink(props) {
  const { href, children } = props
  return <a href={href} target="_blank" rel="noreferrer noopener">{children}</a>
}
