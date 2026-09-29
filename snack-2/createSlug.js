export function createSlug(string, posts = []) {
    // Validazione (Snack 6)
    if (typeof string !== 'string') {
        throw new Error('Il titolo deve essere una stringa');
    }

    if (string.trim() === '') {
        throw new Error('Il titolo non può essere vuoto');
    }

    // Trasformazione base (Snack 2 + 4)
    const baseSlug = string
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-');

    // Se non ci sono post, restituiamo lo slug base
    if (posts.length === 0) {
        return baseSlug;
    }

    // Incremento se lo slug esiste già
    const existingSlugs = new Set(posts.map(post => post.slug));

    if (!existingSlugs.has(baseSlug)) {
        return baseSlug;
    }

    let counter = 1;
    while (existingSlugs.has(`${baseSlug}-${counter}`)) {
        counter++;
    }
    return `${baseSlug}-${counter}`;
}