'use strict'

const fs = require('fs')
const ndjson = require('ndjson')
const normalize = require('normalize-for-search')

const src = require.resolve('db-stations/full.ndjson')

const showError = (err) => {
	console.error(err)
	process.exit(1)
}

const data = {}

fs.createReadStream(src).on('error', showError)
.pipe(ndjson.parse()).on('error', showError)
.on('data', (s) => {
	const normalized = normalize(s.name)
	if (data[normalized]) {
		const d = data[normalized]
		console.error(`duplicate name "${s.name}": ${s.id} & ${d}`)
		return
	}

	data[normalized] = s.id
})
.once('end', () => {
	process.stdout.write(JSON.stringify(data) + '\n')
})
