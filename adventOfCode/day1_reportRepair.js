const fs = require('fs')
const text = fs.readFileSync('./day1_reportRepairData.txt', 'utf-8')
const textByLine = text.split('\n')
const input = textByLine.map(line => +line)
// const input = [10, 5, 6, 9, 2, 3, 1, 12]

const findTwo = (input) => {
  // console.log(`input: ${JSON.stringify(input, null, 1)}`)
  // sort the input using Merge Sort algo
  const sortedInput = mergeSort(input)
  console.log(`sortedInput: ${JSON.stringify(sortedInput, null, 1)}`)
  let head = 0
  let tail = sortedInput.length - 1
  while (head !== tail) {
    let sum = sortedInput[head] + sortedInput[tail]
    if (sum === 2020) {
      return sortedInput[head] * sortedInput[tail]
    } else if (sum > 2020) tail--
    else head++
  }
  return -1
}

const mergeSort = (input) => {
  if (input.length <= 1) return input
  let midPoint = Math.floor(input.length / 2),
      left = mergeSort(input.slice(0, midPoint)),
      right = mergeSort(input.slice(midPoint))
  return merge(left, right)
}

const merge = (left, right) => {
  let sorted = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  // concat anything left over in right and left arrays incase there are more numbers in one vs the other
  return sorted.concat(left.slice().concat(right.slice()))
}

console.log(findTwo(input))

// PART 2
// In your expense report, what is the product of the three entries that sum to 2020?

const findThree = (input) => {
  const sortedInput = mergeSort(input)
  let head = 0
  let mid = head + 1
  let tail = mid + 1
  while (head < sortedInput.length - 2) {
    let sum = sortedInput[head] + sortedInput[mid] + sortedInput[tail]
    if (sum === 2020) {
      return sortedInput[head] * sortedInput[mid] * sortedInput[tail]
    } else if (mid === sortedInput.length - 2) {
      head++
      mid = head + 1
      tail = mid + 1
    } else if (tail === sortedInput.length - 1) {
      mid++
      tail = mid + 1
    } else {
      tail++
    }
  }
  return -1
}

console.log(findThree(input))