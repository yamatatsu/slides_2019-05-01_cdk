import React, { Component, useState, useCallback } from 'react'

import evalPipe from './evalPipe'
import Editor from './Editor'

export default function SandBox(props) {
  const [code, setCode] = useState(props.initial)

  const exec = () => {
    try {
      evalPipe(code)
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  return (
    <>
      <Editor onChange={_code => setCode(_code)} code={code} onExec={exec} />
      <button onClick={exec}>command + enter</button>
    </>
  )
}
