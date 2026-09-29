import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { createSlug } from './createSlug.js';

describe('createSlug', () => {

    describe('trasformazione', () => {

        test('restituisce una stringa in lowercase', () => {
            const result = createSlug('Ciao Mondo');
            assert.equal(result, result.toLowerCase());
        });

        test('sostituisce gli spazi con -', () => {
            assert.equal(createSlug('Questo è un test'), 'questo-e-un-test');
        });

        test('sostituisce spazi multipli con un solo -', () => {
            assert.equal(createSlug('ciao    mondo'), 'ciao-mondo');
        });
    });

    describe('validazione', () => {

        test('lancia un errore se il titolo è una stringa vuota', () => {
            assert.throws(() => createSlug(''), /Il titolo non può essere vuoto/);
        });

        test('lancia un errore se il titolo è composto solo da spazi', () => {
            assert.throws(() => createSlug('   '), /Il titolo non può essere vuoto/);
        });

        test('lancia un errore se il titolo non è una stringa', () => {
            assert.throws(() => createSlug(123), /Il titolo deve essere una stringa/);
        });

        test('non lancia errori con un titolo valido', () => {
            assert.doesNotThrow(() => createSlug('Titolo valido'));
        });
    });
});