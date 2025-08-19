import { join, resolve } from 'node:path'
import { test } from 'node:test'
import * as url from 'node:url'
import { requireModule } from '../../util.js'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

test('requiring a commonjs module works in an esm project', (t) => {
  t.plan(1)
  const module = requireModule(
    resolve(join(__dirname, './data/custom-logger.cjs'))
  )
  t.assert.deepStrictEqual(module, { name: 'Custom Logger', customLevels: { test: 99 } })
})
