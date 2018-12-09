const test = require('tape');
const { hyphenate } = require('./');

test('SomeModule => some-module', tape => {
  tape.plan(1)
  const result = hyphenate('SomeModule');
  tape.ok(Boolean(result === 'some-module'))
})
