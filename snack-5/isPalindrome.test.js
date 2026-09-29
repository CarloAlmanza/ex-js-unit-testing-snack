import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isPalindrome } from './isPalindrome.js';

test('isPalindrome restituisce true per una stringa palindroma', () => {
    // ARRANGE
    const input = 'anna';

    // ACT
    const result = isPalindrome(input);

    // ASSERT
    assert.equal(result, true);
});

test('isPalindrome restituisce false per una stringa non palindroma', () => {
    const result = isPalindrome('ciao');
    assert.equal(result, false);
});