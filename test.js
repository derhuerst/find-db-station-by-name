'use strict'

const test = require('tape')
const normalize = require('normalize-for-search')

const data = require('./data.json')
const findStation = require('.')

test('data.json has normalized keys', (t) => {
	for (let name in data) {
		t.equal(name, normalize(name))
	}
	t.end()
})

test('works', (t) => {
	t.plan(4)

	t.equal(findStation('Ahrensfelde'), '8011003') // upper case
	t.equal(findStation('albstadt lautlingen'), '8000475') // spaces vs. dashes
	t.equal(findStation('agathenbrug'), '8000434') // typo
	t.equal(findStation('alt hüttendorf'), '8011011') // umlauts
})
