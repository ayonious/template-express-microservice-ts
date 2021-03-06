import getFact from '../../src/service/chuckNorrisService';

jest.mock('../../src/client/chuckClient');

describe('Service', () => {
  it('Simplest test: 1', async () => {
    const name = 'NK';
    const ret = await getFact(name);
    expect(ret).toStrictEqual('Hi NK, Random Chuck Norris Fact');
  });
});
