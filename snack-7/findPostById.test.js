import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { posts } from './posts.js';
import { findPostById } from './findPostById.js';

describe('findPostById', () => {

    describe('ricerca', () => {

        test('restituisce il post corretto dato id esistente', () => {
            assert.deepEqual(findPostById(posts, 2), posts[1]);
        });

        test('restituisce il primo post con id 1', () => {
            assert.equal(findPostById(posts, 1).title, 'Introduzione a JavaScript');
        });

        test("restituisce undefined se l'id non esiste", () => {
            assert.equal(findPostById(posts, 999), undefined);
        });
    });

    describe('validazione dei dati di input', () => {

        describe('array posts', () => {

            test('ogni post ha le proprietà id, title e slug', () => {
                for (const post of posts) {
                    assert.ok('id' in post);
                    assert.ok('title' in post);
                    assert.ok('slug' in post);
                }
            });

            test('ogni post ha id numerico', () => {
                for (const post of posts) {
                    assert.equal(typeof post.id, 'number');
                }
            });

            test('title e slug sono stringhe non vuote', () => {
                for (const post of posts) {
                    assert.equal(typeof post.title, 'string');
                    assert.equal(typeof post.slug, 'string');
                    assert.ok(post.title.trim() !== '');
                    assert.ok(post.slug.trim() !== '');
                }
            });
        });

        describe('id passato', () => {

            test('accetta solo id numerici', () => {
                assert.equal(findPostById(posts, '2'), undefined);
            });
        });
    });
});