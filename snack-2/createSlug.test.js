import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSlug } from './createSlug.js';

// Snack 2
test('createSlug restituisce una stringa in lowercase', () => {
    const result = createSlug('Ciao Mondo');
    assert.equal(result, result.toLowerCase());
});

// Snack 4
test('createSlug sostituisce un singolo spazio con -', () => {
    assert.equal(createSlug('ciao mondo'), 'ciao-mondo');
});

test("createSlug gestisce l'esempio della descrizione", () => {
    assert.equal(createSlug('Questo è un test'), 'questo-e-un-test');
});

test('createSlug sostituisce spazi multipli con un solo -', () => {
    assert.equal(createSlug('ciao    mondo'), 'ciao-mondo');
});

test('createSlug gestisce una stringa con una sola parola', () => {
    assert.equal(createSlug('Ciao'), 'ciao');
});