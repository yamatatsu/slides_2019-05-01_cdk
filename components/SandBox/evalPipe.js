import { transform } from '@babel/standalone'
import stringify from 'json-stringify-pretty-compact'

const transformOptions = {
  inputSourceMap: false,
  babelrc: false,
  presets: [
    'es2015',
    [require('@babel/preset-env'), { exclude: ['transform-regenerator'] }],
    [
      require('@babel/preset-typescript'),
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
}

export default function evalPipe(code) {
  eval(transform(code, transformOptions).code)
}
