const fs = require('fs')
const text = fs.readFileSync('./day3_tobogganTrajectory.txt', 'utf-8')
const input = text.split('\n')
console.log(`input: ${JSON.stringify(input, null, 1)}`)

// Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?

const howManyTrees = (input) => {
  const height = input.length
  const width = input[0].length
  let xIdx = 3
  let yIdx = 1
  let trees = 0

  while (yIdx < height) {
    if (xIdx >= width) {
      xIdx = xIdx - width
    }
    if (input[yIdx][xIdx] === '#') trees++
    xIdx += 3
    yIdx += 1
  }
  return trees
}

console.log(howManyTrees(input))

// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.
const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]

const howManyTreesPerSlope = (input, slopes) => {
  const height = input.length
  const width = input[0].length
  let trees = []

  for (let i = 0; i < slopes.length; i++) {
    let xIdx = slopes[i][0]
    let yIdx = slopes[i][1]
    let treeCount = 0
  
    while (yIdx < height) {
      if (xIdx >= width) {
        xIdx = xIdx - width
      }
      if (input[yIdx][xIdx] === '#') treeCount++
      xIdx += slopes[i][0]
      yIdx += slopes[i][1]
    }
    trees.push(treeCount)
  }
  const treeProduct = trees.reduce((accumulator, currVal) => {
    return accumulator * currVal
  }, 1)
  return treeProduct
}

console.log(howManyTreesPerSlope(input, slopes))