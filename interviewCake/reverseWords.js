const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

const reverseWords = (arr) => {
  let store = []
  let currWord = []

  arr.forEach((e, i) => {
    if (e === ' ') {
      currWord.push(e)
      store.unshift(...currWord)
      currWord = []
    } else if (i === arr.length - 1) {
      currWord.push(e)
      currWord.push(' ')
      store.unshift(...currWord)
    } else {
      currWord.push(e)
    }
  })

  // console.log(`store: ${JSON.stringify(store, null, 1)}`)

  store.forEach((e, i) => {
    arr[i] = e
  })

  // console.log(`arr: ${JSON.stringify(arr, null, 1)}`)
  arr.pop()
  return arr
}

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'

// OPTIMAL SOLUTION IS TO REVERSE ALL CHARACTERS IN INPUT ARRAY, AND THEN GO THROUGH AND FLIP INDIVIDUAL WORDS.