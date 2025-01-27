const { findDigitRightToLeft, findDigitLeftToRight } = require('./savchuk-lr1-project');

describe('findDigitRightToLeft', () => {
    test('Возвращает правильную цифру для K=12345 и N=2', () => {
        const result = findDigitRightToLeft(12345, 2);
        expect(result).toBe(4); // Вторая цифра справа — 4
    });

    test('Возвращает ошибку, если K не инициализировано', () => {
        const result = findDigitRightToLeft(0, 2);
        expect(result).toBe(-1); // K не задано
    });

    test('Возвращает ошибку, если N больше длины K', () => {
        const result = findDigitRightToLeft(123, 5);
        expect(result).toBe(-1); // N больше длины числа
    });
});

describe('findDigitLeftToRight', () => {
    test('Возвращает правильную цифру для K=12345 и N=3', () => {
        const result = findDigitLeftToRight(12345, 3);
        expect(result).toBe(3); // Третья цифра слева — 3
    });

    test('Возвращает ошибку, если K не инициализировано', () => {
        const result = findDigitLeftToRight(0, 3);
        expect(result).toBe(-1); // K не задано
    });

    test('Возвращает ошибку, если N больше длины K', () => {
        const result = findDigitLeftToRight(123, 5);
        expect(result).toBe(-1); // N больше длины числа
    });
});
