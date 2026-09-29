export function addPost(posts, newPost) {
    // Validazione id
    if (posts.some(post => post.id === newPost.id)) {
        throw new Error('Id già esistente');
    }

    // Validazione slug
    if (posts.some(post => post.slug === newPost.slug)) {
        throw new Error('Slug già esistente');
    }

    // Nessun duplicato: aggiungiamo
    posts.push(newPost);
    return posts;
}