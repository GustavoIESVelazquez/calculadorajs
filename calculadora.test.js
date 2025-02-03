const { suma, resta,multiplicacion,division,raizCuadrada } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(resta(5, 3)).toBe(2);
});

test('Multiplica 2 * 3 y devuelve 6', () => {
    expect(multiplicacion(2, 3)).toBe(6);
});

test('Divide 6 / 3 y devuelve 2', () => {
    expect(division(6, 3)).toBe(2);
});

test('Raiz cuadrada de 9 y devuelve 3', () => {
    expect(raizCuadrada(9)).toBe(3);
});



