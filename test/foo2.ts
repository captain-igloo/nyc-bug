import * as test from 'tape';

import Foo2 from '../src/Foo2';

test('test', (t) => {
    const foo = new Foo2();
    t.ok(true);
    t.end();
});
