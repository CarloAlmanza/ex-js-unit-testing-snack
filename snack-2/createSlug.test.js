import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSlug } from './createSlug.js';

// ---- Snack 2 ----
test('createSlug restituisce una stringa in lowercase', () => {
    const result = createSlug('Ciao Mondo');
    assert.equal(result, result.toLowerCase());
});

// ---- Snack 4 ----
test('createSlug sostituisce gli spazi con -', () => {
    assert.equal(createSlug('Questo è un test'), 'questo-e-un-test');
});

// ---- Snack 6 ----
test('createSlug lancia un errore se il titolo è una stringa vuota', () => {
    assert.throws(() => createSlug(''), /Il titolo non può essere vuoto/);
});

test('createSlug lancia un errore se il titolo è composto solo da spazi', () => {
    assert.throws(() => createSlug('   '), /Il titolo non può essere vuoto/);
});

test('createSlug lancia un errore se il titolo non è una stringa', () => {
    assert.throws(() => createSlug(123), /Il titolo deve essere una stringa/);
});

test('createSlug lancia un errore se il titolo è null', () => {
    assert.throws(() => createSlug(null), /Il titolo deve essere una stringa/);
});