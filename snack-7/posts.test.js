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

        test('ogni post ha id numerico', () => {
            for (const post of posts) {
                assert.equal(typeof post.id, 'number');
            }
        });
    });
});