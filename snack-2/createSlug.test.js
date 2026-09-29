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
    });

    describe('validazione', () => {

        test('lancia un errore se il titolo è vuoto', () => {
            assert.throws(() => createSlug(''), /Il titolo non può essere vuoto/);
        });

        test('lancia un errore se il titolo non è una stringa', () => {
            assert.throws(() => createSlug(123), /Il titolo deve essere una stringa/);
        });
    });

    describe('incremento slug con array di post', () => {

        test('restituisce lo slug base se non esiste nei post', () => {
            const posts = [{ slug: 'altro-post' }];
            assert.equal(createSlug('Ciao Mondo', posts), 'ciao-mondo');
        });

        test('incrementa di 1 se lo slug esiste già', () => {
            const posts = [{ slug: 'ciao-mondo' }];
            assert.equal(createSlug('Ciao Mondo', posts), 'ciao-mondo-1');
        });

        test('incrementa al primo suffisso libero se esistono più collisioni', () => {
            const posts = [
                { slug: 'ciao-mondo' },
                { slug: 'ciao-mondo-1' },
            ];
            assert.equal(createSlug('Ciao Mondo', posts), 'ciao-mondo-2');
        });

        test('salta i "buchi" nella numerazione', () => {
            const posts = [
                { slug: 'ciao-mondo' },
                { slug: 'ciao-mondo-3' },
            ];
            assert.equal(createSlug('Ciao Mondo', posts), 'ciao-mondo-1');
        });

        test('funziona anche con array di post vuoto', () => {
            assert.equal(createSlug('Ciao Mondo', []), 'ciao-mondo');
        });
    });
});