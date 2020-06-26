// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

// We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.

// Think about capitalized words. For example, look at these sentences:

// "After beating the eggs, Dana read the next step:"
// "Add milk and eggs, then add flour and sugar."

// What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

// Assume the input will only contain words and standard punctuation.

// You could make a reasonable argument to use regex in your solution. We won't, mainly because performance is difficult to measure and can get pretty bad.

class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    let currWord = ''
    let punctuation = [' ', '.', ',', ':', '?', '!']
    // Count the frequency of each word
    for (let i = 0; i < inputString.length; i++) {

      // edge case for last letter in string
      if (punctuation.includes(inputString.charAt(i)) || i === inputString.length - 1) {
        if (i === inputString.length - 1 && !punctuation.includes(inputString.charAt(i))) {
          currWord += inputString.charAt(i)
        }

        if (currWord.length) {
          let upper = currWord.charAt(0).toUpperCase() + currWord.slice(1)
          let lower = currWord.toLowerCase()

          if (this.wordsToCounts.has(currWord)) {
            this.wordsToCounts.set(currWord, this.wordsToCounts.get(currWord) + 1)
          } else if (this.wordsToCounts.has(upper) && currWord === lower) {
            let newCount = this.wordsToCounts.get(upper) + 1
            this.wordsToCounts.delete(upper)
            this.wordsToCounts.set(lower, newCount)
          } else if (this.wordsToCounts.has(lower) && currWord === upper) {
            this.wordsToCounts.set(lower, this.wordsToCounts.get(lower) + 1)
          } else {
            this.wordsToCounts.set(currWord, 1)
          }
          currWord = ''
        }
      } else if (inputString.charAt(i) === '-') {
        if (!punctuation.includes(inputString.charAt(i - 1)) &&
            !punctuation.includes(inputString.charAt(i + 1))) {
              currWord += inputString.charAt(i)
        }
      } else {
        currWord += inputString.charAt(i)
      }
    }
    return this.wordsToCounts
  }
}

console.log(new WordCloudData('After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'))

console.log(new WordCloudData('I like cake').wordsToCounts)

let expected = new Map([['I', 1], ['like', 1], ['cake', 1]])
console.log(`expected: ${JSON.stringify(expected, null, 1)}`)