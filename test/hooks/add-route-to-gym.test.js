const assert = require('assert');
const addRouteToGym = require('../../src/hooks/add-route-to-gym');

describe('\'AddRouteToGym\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = addRouteToGym();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
