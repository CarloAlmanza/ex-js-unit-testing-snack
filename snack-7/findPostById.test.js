import { test } from 'node:test';
import assert from 'node:assert/strict';
import { posts } from './posts.js';
import { findPostById } from './findPostById.js';

// ============================================
// GRUPPO 1 — findPostById
// ============================================

test('findPostById restituisce il post corretto dato id esistente', () => {
    // ARRANGE
    const id = 2;
    const expected = posts[1]; // il post con id 2

    // ACT
    const result = findPostById(posts, id);

    // ASSERT
    assert.deepEqual(result, expected);
});

test('findPostById restituisce il primo post con id 1', () => {
    const result = findPostById(posts, 1);
    assert.equal(result.title, 'Introduzione a JavaScript');
});

test('findPostById restituisce undefined se l\'id non esiste', () => {
    const result = findPostById(posts, 999);
    assert.equal(result, undefined);
});

// ============================================
// GRUPPO 2 — Validazione della struttura dati
// ============================================

test('ogni post ha le proprietà id, title e slug', () => {
    for (const post of posts) {
        assert.ok('id' in post, `Il post ${post.id} non ha la proprietà id`);
        assert.ok('title' in post, `Il post ${post.id} non ha la proprietà title`);
        assert.ok('slug' in post, `Il post ${post.id} non ha la proprietà slug`);
    }
});

test('ogni post ha id numerico', () => {
    for (const post of posts) {
        assert.equal(typeof post.id, 'number', `L'id del post "${post.title}" non è un numero`);
    }
});

test('ogni post ha title e slug come stringhe non vuote', () => {
    for (const post of posts) {
        assert.equal(typeof post.title, 'string');
        assert.equal(typeof post.slug, 'string');
        assert.ok(post.title.trim() !== '', 'title non può essere vuoto');
        assert.ok(post.slug.trim() !== '', 'slug non può essere vuoto');
    }
});

test('findPostById richiede un id numerico', () => {
    const result = findPostById(posts, '2'); // stringa, non numero
    assert.equal(result, undefined); // perché '2' !== 2 con ===
});