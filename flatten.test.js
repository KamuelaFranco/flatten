const flatten = require('./flatten');

describe('flatten', () => {
  it('should return a new copy of the same array given a flat array', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([1, 2, 3, 4]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a singly nested array', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([1, [2, 3], 4]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a singly nested array across two elements', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([[1, 2], [3, 4]]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a singly nested array across three elements', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([[1], [2], [3, 4]]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a singly nested array across four elements', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([[1], [2], [3], [4]]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a doubly nested array', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([1, [2, [3]], 4]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a doubly nested array across two elements', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([1, [2, [3]], [4]]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a doubly nested array across three elements', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([[[1]], [2, [3]], [[4]]]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a doubly nested array across four elements', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([[[1]], [[2]], [[3]], [[4]]]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a triply nested array across four elements', () => {
    const expected = [1, 2, 3, 4];
    const actual = flatten([[[[1]]], [[[2]]], [[[3]]], [[[4]]]]);
    expect(actual).toEqual(expected);
  });
  it('should return a flattened array given a triply nested array with varying types', () => {
    const expected = [1, 'a', 3.33333, { a: 'b' }];
    const actual = flatten([[[[1]]], ['a'], [[[3.33333]]], [[{ a: 'b' }]]]);
    expect(actual).toEqual(expected);
  });
});
