// Write a function for doing an in-place ↴ shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

let random = (floor, ceiling) => {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor
}

let shuffle = (arr) => {
  if (arr.length < 1) throw new Error('Must have atleast 1 number in input array to shuffle.')
  let iterator = 0
  while (iterator < arr.length) {
    let idxToShuffle = random(iterator, arr.length - 1)
    if (idxToShuffle !== iterator) {
      let valueToReplace = arr[iterator]
      arr[iterator] = arr[idxToShuffle]
      arr[idxToShuffle] = valueToReplace
    }
    iterator++
  }
  return arr
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))