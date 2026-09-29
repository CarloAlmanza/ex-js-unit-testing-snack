import { test } from 'node:test';
import assert from 'node:assert/strict';
import { average } from './average.js';

test('average calcola la media aritmetica di un array di numeri', () => {
    // ARRANGE
    const numbers = [2, 4, 6];
    const expected = 4; // (2 + 4 + 6) / 3 = 12 / 3 = 4

    // ACT
    const result = average(numbers);

    // ASSERT
    assert.equal(result, expected);
});