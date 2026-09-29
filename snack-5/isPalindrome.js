export function isPalindrome(string) {
    const reversed = string.split('').reverse().join('');
    return string === reversed;
}