
import getFunction from '../functions.js';

const without = getFunction();

test('discripton', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([]);
});