import React, { Fragment } from 'react'
import { Head } from 'mdx-deck'
import ExLink from './ExLink'
import lodingImage from './loading.png'

const TWITTER_ACCOUNT = '@yamatatsu193'

export default props => {
  const { title, eventName, hashtag } = props

  const isPuppeteer =
    window.navigator.userAgent.toLowerCase().indexOf('headlesschrome') >= 0
  if (isPuppeteer) return <Loading />

  return (
    <Fragment>
      <H1>{title}</H1>
      <hr />
      <H3>やまたつ</H3>
      <H3>{eventName}</H3>
      {hashtag && (
        <H3>
          <ExLink href={`https://twitter.com/search?q=%23${hashtag}`}>
            #{hashtag}
          </ExLink>
        </H3>
      )}
    </Fragment>
  )
}

const H3 = ({ children }) => (
  <h3
    className="sc-kgoBCf kVSTZj sc-chPdSV gjsVpB"
    fontSize="2"
    color="heading"
  >
    {children}
  </h3>
)
const H1 = ({ children }) => (
  <h1
    className="sc-jzJRlG enxKql sc-fjdhpX dYzIWH"
    fontSize="4"
    color="heading"
  >
    {children}
  </h1>
)

function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <img class="load" src={lodingImage} />
      <style>
        {`
          .load {
            width: 50px;
            height: 50px;
            -webkit-animation: spin 1.5s linear infinite;
            -moz-animation: spin 1.5s linear infinite;
            -ms-animation: spin 1.5s linear infinite;
            -o-animation: spin 1.5s linear infinite;
            animation: spin 1.5s linear infinite;
          }

          @-webkit-keyframes spin {
            0% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
            }
          }
          @-moz-keyframes spin {
            0% {
              -moz-transform: rotate(0deg);
            }
            100% {
              -moz-transform: rotate(360deg);
            }
          }
          @-ms-keyframes spin {
            0% {
              -ms-transform: rotate(0deg);
            }
            100% {
              -ms-transform: rotate(360deg);
            }
          }
          @-o-keyframes spin {
            0% {
              -o-transform: rotate(0deg);
            }
            100% {
              -o-transform: rotate(360deg);
            }
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          `}
      </style>
    </div>
  )
}
