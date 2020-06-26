// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false
// "But 'ivicc' isn't a palindrome!"

// If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. Jumping in with a flawed understanding of the problem doesn't look good in an interview.

const str1 = 'civic'
const str2 = 'ivicc'
const str3 = 'civil'

const permutationPalindrome = (str) => {
  let p = 0
  let store = {}
  let numOfPairs = 0
  while (p < str.length) {
    if (store[str[p]]) {
      store[str[p]] = 0
      numOfPairs++
    } else {
      store[str[p]] = 1
    }
    p++
  }
  if (numOfPairs === str.length / 2 ||
      numOfPairs === (str.length - 1) / 2 && str.length % 2 === 1) {
    return true 
  } else {
    return false
  }
}

console.log(permutationPalindrome(str1))
console.log(permutationPalindrome(str2))
console.log(permutationPalindrome(str3))

// interview cake solution

function hasPalindromePermutation(theString) {

  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}