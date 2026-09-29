import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSlug } from './createSlug.js';

test('createSlug restituisce una stringa in lowercase', () => {
    // ARRANGE
    const input = 'Ciao Mondo';

    // ACT
    const result = createSlug(input);

    // ASSERT
    assert.equal(result, result.toLowerCase());
});