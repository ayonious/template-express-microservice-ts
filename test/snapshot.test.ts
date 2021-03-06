import sum from '../src/utils/utils';

describe('Test with snapshot', () => {
  it(`test1`, function () {
    const p = sum(10);
    expect(p).toMatchSnapshot();
  });
});
