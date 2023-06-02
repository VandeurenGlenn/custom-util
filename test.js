import test from 'tape';
import { hyphenate } from './index.js';

test('SomeModule => some-module', tape => {
  tape.plan(1)
  const result = hyphenate('SomeModule');
  tape.ok(Boolean(result === 'some-module'))
})

test('SomeModuleNameThatIsLong => some-module-name-that-is-long', tape => {
  tape.plan(1)
  const result = hyphenate('SomeModuleNameThatIsLong');
  tape.ok(Boolean(result === 'some-module-name-that-is-long'))
})
