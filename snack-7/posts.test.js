import { describe, test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createPosts } from './posts.js';
import { findPostById } from './findPostById.js';
import { addPost } from './addPost.js';
import { removePost } from './removePost.js';

describe('gestione posts', () => {

    let posts;

    beforeEach(() => {
        posts = createPosts();
    });

    describe('findPostById', () => {
        test('restituisce il post corretto dato id esistente', () => {
            assert.deepEqual(findPostById(posts, 2), posts[1]);
        });

        test("restituisce undefined se l'id non esiste", () => {
            assert.equal(findPostById(posts, 999), undefined);
        });
    });

    describe('addPost', () => {

        test("dopo addPost, l'array contiene un elemento in più", () => {
            const initialLength = posts.length;
            addPost(posts, { id: 4, title: 'Nuovo', slug: 'nuovo' });
            assert.equal(posts.length, initialLength + 1);
        });

        test('aggiunge correttamente un post con id e slug unici', () => {
            const newPost = { id: 4, title: 'Nuovo', slug: 'nuovo-post' };
            addPost(posts, newPost);
            assert.deepEqual(posts.at(-1), newPost);
        });
    });

    describe('addPost - validazione unicità', () => {

        test('lancia "Id già esistente" se l\'id è duplicato', () => {
            // ARRANGE
            const duplicateId = { id: 1, title: 'Altro titolo', slug: 'slug-nuovo' };

            // ACT + ASSERT
            assert.throws(
                () => addPost(posts, duplicateId),
                /Id già esistente/
            );
        });

        test('lancia "Slug già esistente" se lo slug è duplicato', () => {
            const duplicateSlug = {
                id: 99,
                title: 'Altro titolo',
                slug: 'introduzione-a-javascript', // slug già presente
            };

            assert.throws(
                () => addPost(posts, duplicateSlug),
                /Slug già esistente/
            );
        });

        test('i due errori sono distinti (messaggi diversi)', () => {
            const duplicateId = { id: 1, title: 'X', slug: 'slug-unico-1' };
            const duplicateSlug = { id: 99, title: 'Y', slug: 'introduzione-a-javascript' };

            // Cattura i messaggi
            let idError, slugError;
            try { addPost(posts, duplicateId); } catch (e) { idError = e.message; }
            try { addPost(posts, duplicateSlug); } catch (e) { slugError = e.message; }

            assert.notEqual(idError, slugError);
        });

        test("l'array NON viene modificato quando viene lanciato un errore", () => {
            const initialLength = posts.length;
            const duplicateId = { id: 1, title: 'X', slug: 'slug-unico' };

            assert.throws(() => addPost(posts, duplicateId), /Id già esistente/);
            assert.equal(posts.length, initialLength); // lunghezza invariata
        });
    });

    describe('removePost', () => {
        test("dopo removePost, l'array contiene un elemento in meno", () => {
            const initialLength = posts.length;
            removePost(posts, 2);
            assert.equal(posts.length, initialLength - 1);
        });
    });

    describe('validazione dati', () => {
        test('ogni post ha id, title, slug', () => {
            for (const post of posts) {
                assert.ok('id' in post);
                assert.ok('title' in post);
                assert.ok('slug' in post);
            }
        });
    });
});