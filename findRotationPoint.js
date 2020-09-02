const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
]

const words2 = [
  'a',
  'c',
  'd',
  't',
  'w',
  'x',
  'z',
]

const words3 = [
  'c',
  'd',
  't',
  'w',
  'x',
  'z',
  'a',
]

const findRotationPoint = (words) => {
  let upperBound = words.length - 1
  let lowerBound = 0

  if (words.length < 2) throw new Error('Must have 2 words.')
  else if (words[0] < words[words.length - 1]) return 0
  else if (words[words.length - 1] < words[words.length - 2]) return words.length - 1
  
  while (upperBound > lowerBound + 1) {
    let mid = Math.floor((upperBound - lowerBound) / 2) + lowerBound
    if (words[mid] < words[mid - 1]) return mid
    else if (words[mid] > words[0]) {
      lowerBound = mid
    } else {
      upperBound = mid
    }
  }

  return false
}

console.log(findRotationPoint(words))
console.log(findRotationPoint(words2))
console.log(findRotationPoint(words3))
