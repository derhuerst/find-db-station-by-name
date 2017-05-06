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
	// t.plan(6)

	// todo
	t.end()
})
