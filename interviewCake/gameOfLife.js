let input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]

const gameOfLife = (matrix) => {
  let iterations = 0
  let allOnes = matrix.length ? false : true
  console.log('matrix to start')
  console.table(matrix)

  while (!allOnes) {
    // assume our grid is full of 1's until we find a 0
    allOnes = true
    // set all recently converted 2 values to 1 for next iteration
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] === 2 ? matrix[i][j] = 1 : null
      }
    }

    console.log('after 2 convert')
    console.table(matrix)

    // loop through and set 1's neighbors to 1's
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let node = matrix[i][j]
        let upperEdge = i === 0 || matrix[i - 1][j] === 1 || matrix[i - 1][j] === 2 ? true : false
        let lowerEdge = i === matrix.length - 1 || matrix[i + 1][j] === 1 || matrix[i + 1][j] === 2 ? true : false
        let leftEdge = j === 0 || matrix[i][j - 1] === 1 || matrix[i][j - 1] === 2 ? true : false
        let rightEdge = j === matrix[i].length - 1 || matrix[i][j + 1] === 1 || matrix[i][j + 1] === 2 ? true : false
        if (node === 1) {
          upperEdge === false ? matrix[i - 1][j] = 2 : null
          lowerEdge === false ? matrix[i + 1][j] = 2 : null
          leftEdge === false ? matrix[i][j - 1] = 2 : null
          rightEdge === false ? matrix[i][j + 1] = 2 : null
        } else if (node === 0) {
          allOnes = false
        }
      }
    }
    iterations++
    console.log(`iterations: ${iterations}`)
    console.log('after iteration')
    console.table(matrix)
  }
  return iterations
}

gameOfLife(input)