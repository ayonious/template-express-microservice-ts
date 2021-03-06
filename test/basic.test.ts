import sum from '../src/utils/utils';

describe('Example: basic unit test', () => {
  it(`service test`, function () {
    const p = sum(10);
    expect(p).toBe(55);
  });
});
