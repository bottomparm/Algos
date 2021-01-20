const string = ['a', 'b', 'c', 'd', 'e']

const reverseString = (arr) => {
  let tail = 0
  let head = arr.length - 1
  while (tail < head) {
    let tailStore = arr[tail]
    let headStore = arr[head]
    arr[tail] = headStore
    arr[head] = tailStore
    tail++
    head--
  }
  console.log(`arr: ${JSON.stringify(arr, null, 1)}`)
  return arr
}

reverseString(string)