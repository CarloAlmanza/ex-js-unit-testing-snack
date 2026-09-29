export function findPostById(posts, id) {
    return posts.find(post => post.id === id);
}