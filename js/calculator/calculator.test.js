const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 6/2 = 3', ()=> {
  expect(calculator.divide(6, 2)).toBe(3)
})

// infinity es un valor definido por js, para usar en la division por 0
test('divide 6/0 = Infinity', ()=> {
  expect(calculator.divide(6, 0)).toBe(Infinity);
  
})

test('multiplicar 6*2 = 12', ()=> {
  expect(calculator.multiply(6, 2)).toBe(12)
})

test('multiplicar 6*3 = 18', ()=> {
  expect(calculator.multiply(6, 3)).toBe(18)
})