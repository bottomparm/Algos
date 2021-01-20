// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// JavaScript
// your function would return:

//   [84, 12, 28, 21]

// JavaScript
// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// JavaScript
// Here's the catch: You can't use division in your solution!

const getProductsOfAllIntsExceptAtIndex = (arr) => {
  if (arr.length < 2) throw new Error('This algo requires atleast 2 numbers to function properly.')
  let currProd = 1
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result[i] = currProd
    currProd *= arr[i]
  }

  currProd = 1
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= currProd
    currProd *= arr[i]
  }

  return result
}

const input1 = [1, 7, 3, 4]
console.log(getProductsOfAllIntsExceptAtIndex(input1))
