const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test('given date in the past, colorForDate() returns red', () => {
//   expect(colorForDate("30-02-2022")).toBe('red');
// });
