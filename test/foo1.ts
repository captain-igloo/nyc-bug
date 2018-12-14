import * as test from 'tape';

import Foo1 from '../src/Foo1';

test('test', (t) => {
    const foo = new Foo1();
    t.ok(true);
    t.end();
});
