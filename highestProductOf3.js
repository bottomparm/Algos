let nums = [-5, 4, 8, 2, -10]


let highestProductOf3 = (arr) => {
  if (arr.length < 3) throw new Error('Less than 3 items in input!')
  let highest3 = arr[0] * arr[1] * arr[2]
  let highest2 = arr[0] * arr[1]
  let smallest2 = arr[0] * arr[1]
  let highest = Math.max(arr[0], arr[1])
  let lowest = Math.min(arr[0], arr[1])
  for (let i = 2; i < arr.length; arr++) {
    
  }
}

console.log(highestProductOf3(nums))

