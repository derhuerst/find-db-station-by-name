'use strict'

const normalize = require('normalize-for-search')
const levenshtein = require('leven')

const data = require('./data.json')

const findStation = (query) => {
	if (data[query]) return data[query]

	const normalized = normalize(query)
	if (data[normalized]) return data[normalized]

	let matches = 0
	let match = null
	for (let state in data){
		if (levenshtein(state, normalized) <= 2) {
			if (matches > 0) return null
			matches++
			match = data[state]
		}
	}

	return match
}

module.exports = findStation
