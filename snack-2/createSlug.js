export function createSlug(string) {
    // Validazione
    if (typeof string !== 'string') {
        throw new Error('Il titolo deve essere una stringa');
    }

    if (string.trim() === '') {
        throw new Error('Il titolo non può essere vuoto');
    }

    // Trasformazione (Snack 2 + 4)
    return string
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-');
}