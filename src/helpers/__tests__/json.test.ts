import { flatten, unflatten } from '../json';

describe('json helpers', () => {
  it('flatten works', () => {
    const json = {
      a: {
        b: {
          c: 1,
        },
      },
    };

    expect(flatten(json)['a.b.c']).toEqual(1);
  });

  it('unflatten works', () => {
    const json = {
      'a.b.c': '1',
    };

    expect(unflatten(json).a.b.c).toEqual('1');
  });
});
