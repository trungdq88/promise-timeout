import timeout from './promise-timeout.js';

describe('timeout', () => {
  it('resolves', async () => {
    const test = await timeout(
      new Promise(r => setTimeout(() => r(1), 300)),
      500,
    );
    expect(test).toBe(1);
  });

  it('rejects', async () => {
    const test2 = await timeout(
      new Promise(r => setTimeout(() => r(2), 300)),
      100,
    ).catch(_ => _);
    expect(test2).toBeInstanceOf(Error);
    expect(test2.message).toBe('Timeout');
  });
});
