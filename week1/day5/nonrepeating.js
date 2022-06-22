// Write a function that takes in a string of lowercase letters
// and returns the index of the string's first non-repeating character.
// If the input string does not have any non-repeating characters,
// your function should return -1.

function firstNonRepeating(string) {
  let hash = {};
  for (const letter of string) {
    if (!(letter in hash)) hash[letter] = 0;
    hash[letter]++;
  }
  for (const letter of string) {
    if (hash[letter] === 1) return `${letter},${string.indexOf(letter)}`;
  }
  return -1;
}

// returns 0
console.log(firstNonRepeating("abcdef"));
// returns 1
console.log(firstNonRepeating("abcdeaf"));
// returns 3
console.log(firstNonRepeating("bbbc"));
