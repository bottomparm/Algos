const fs = require('fs')
const text = fs.readFileSync('./day2_passwordPhilosophy.txt', 'utf-8')
const input = text.split('\n')
// console.log(`input: ${JSON.stringify(input, null, 1)}`)


// const input = ['12-13 r: rrrrrrrrwrrfh']

const validPasswords = (input) => {
  let validPasswords = 0
  for (let i = 0; i < input.length; i++) {
    let count
    let letter
    let pass
    [count, letter, pass] = input[i].split(' ')
    let lowerLimit
    let upperLimit
    [lowerLimit, upperLimit] = count.split('-')
    letter = letter[0]
    let letterCount = 0
    for (let j = 0; j < pass.length; j++) {
      if (pass[j] === letter) letterCount++
      if (letterCount > +upperLimit) continue
    }
    if (letterCount >= +lowerLimit && letterCount <= +upperLimit) validPasswords++
  }
  return validPasswords
}

console.log(validPasswords(input))

const validPasswordsPart2 = (input) => {
  let validPasswords = 0
  for (let i = 0; i < input.length; i++) {
    let count
    let letter
    let pass
    [count, letter, pass] = input[i].split(' ')
    let index1
    let index2
    [index1, index2] = count.split('-')
    let givenIdxs = [index1, index2]
    letter = letter[0]
    let valid = false
    for (let j = 0; j < givenIdxs.length; j++) {
      if (pass[givenIdxs[j] - 1] === letter) {
        if (valid) valid = false
        else valid = true
      }
    }
    if (valid) validPasswords++
  }
  return validPasswords
}

console.log(validPasswordsPart2(input))