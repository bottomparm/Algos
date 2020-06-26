// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const mergeArrays = (arr1, arr2) => {
  let p1 = 0
  let p2 = 0

  while (p2 < arr2.length) {
    if (!arr1[p1]) {
      arr1.push(arr2[p2])
      p2++
    } else if (arr2[p2] <= arr1[p1]) {
      arr1.splice(p1, 0, arr2[p2]) // position, delete count, element
      p1++ // because we added an element to arr1
      p2++
    } else {
      p1++
    }
  }

  return arr1
}

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]