const assert = require('chai').assert;

function sum (a, b) {
    return a + b;
}

describe('Sample unit test', () => {
    it('adds 1 + 2 to equal 3', (done) => {
        assert.equal(sum(1, 2), 3);
        done();
    });
});
