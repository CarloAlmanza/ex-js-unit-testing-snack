import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getInitials } from './getInitials.js';

test('getInitials restituisce le iniziali di un nome completo', () => {
    assert.equal(getInitials('Mario Rossi'), 'MR');
});

test('getInitials gestisce un nome singolo', () => {
    assert.equal(getInitials('Luca'), 'L');
});

test('getInitials gestisce tre parole', () => {
    assert.equal(getInitials('Anna Maria Bianchi'), 'AMB');
});

test('getInitials gestisce spazi extra', () => {
    assert.equal(getInitials('  Mario   Rossi  '), 'MR');
});