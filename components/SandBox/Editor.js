import React, { useState, useEffect, useCallback } from 'react'
import MonacoEditor from 'react-monaco-editor'

const options = {
  minimap: { enabled: false },
  fontSize: 20,
}

export default function Editor(props) {
  const { code, onChange, onExec } = props

  const [[editor, monaco], setMonaco] = useState([])

  useEffect(() => {
    if (!editor || !monaco) return
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, onExec)
  }, [code, editor, monaco])

  const editorDidMount = (editor, monaco) => {
    const base = monaco.languages.typescript.typescriptDefaults._compilerOptions
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      ...base,
      strict: true,
    })
    editor.getModel().updateOptions({
      tabSize: 2,
    })
    setMonaco([editor, monaco])
  }

  return (
    <div style={{ height: '90vh', width: '90vw', textAlign: 'left' }}>
      <MonacoEditor
        value={code}
        language="typescript"
        theme="vs-dark"
        onChange={onChange}
        editorDidMount={editorDidMount}
        options={options}
      />
    </div>
  )
}
