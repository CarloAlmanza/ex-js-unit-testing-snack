export function getInitials(fullName) {
    return fullName
        .trim()
        .split(/\s+/)          // separa sulle sequenze di spazi
        .map(word => word[0])  // prende la prima lettera di ogni parola
        .join('')              // unisce tutto
        .toUpperCase();        // rende maiuscole
}