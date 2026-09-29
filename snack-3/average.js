export function average(numbers) {
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    return sum / numbers.length;
}