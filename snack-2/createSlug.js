export function createSlug(string) {
    return string
        .toLowerCase()                    // lowercase (Snack 2)
        .normalize('NFD')                 // separa le lettere dagli accenti
        .replace(/[\u0300-\u036f]/g, '')  // rimuove i segni diacritici (accenti)
        .replace(/\s+/g, '-');            // sostituisce spazi (anche multipli) con -
}