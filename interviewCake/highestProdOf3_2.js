// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

function highestProductOf3(arrayOfInts) {

  // Calculate the highest product of three numbers
  if (arrayOfInts.length < 3) throw new Error('Need 3 to make it happen.')
  let currHighestProdOf3 = Number.NEGATIVE_INFINITY
  let currHighestProdOf2 = arrayOfInts[0] * arrayOfInts[1]
  let currLowestProdOf2 = arrayOfInts[0] * arrayOfInts[1]
  let currHighestNum = Math.max(arrayOfInts[0], arrayOfInts[1])
  let currLowestNum = Math.min(arrayOfInts[0], arrayOfInts[1])

  for (let i = 2; i < arrayOfInts.length; i++) {
    let currNum = arrayOfInts[i]
    let prodOf3_1 = currNum * currHighestProdOf2
    let prodOf3_2 = currNum * currLowestProdOf2
    currHighestProdOf3 = Math.max(currHighestProdOf3, prodOf3_1, prodOf3_2)

    let prodOf2_1 = currNum * currHighestNum
    let prodOf2_2 = currNum * currLowestNum
    currHighestProdOf2 = Math.max(currHighestProdOf2, prodOf2_1, prodOf2_2)
    currLowestProdOf2 = Math.min(currLowestProdOf2, prodOf2_1, prodOf2_2)

    currHighestNum = Math.max(currHighestNum, currNum)
    currLowestNum = Math.min(currLowestNum, currNum)
  }

  return currHighestProdOf3
}

const input = [-5, -1]
console.log(highestProductOf3(input))