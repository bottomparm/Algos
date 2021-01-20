// Write a recursive function for generating all permutations of an input string. Return them as a set.

// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

// To start, assume every character in the input string is unique.

// Your function can have loops—it just needs to also be recursive.

const getPermutations = (str, permSet) => {
  console.log(permSet.size, factorial(str.length))
  if (permSet.size === factorial(str.length)) return permSet
  const strMinusLastChar = str.slice(0, -1)
  const lastChar = str[str.length - 1]
  console.log(`strMinusLastChar: ${strMinusLastChar}`)
  console.log(`lastChar: ${lastChar}`)
  console.log(`permSet: ${permSet}`)
  for (let i = 0; i < str.length; i++) {
    let newConfig = strMinusLastChar.slice(0, i) + lastChar + strMinusLastChar.slice(i, strMinusLastChar.length)
    console.log(`newConfig: ${newConfig}`)
    console.log(permSet.has(newConfig))
    if (!permSet.has(newConfig)) {
      console.log('adding newConfig!')
      permSet.add(newConfig)
    }
  }
  console.log(`permSet after: ${JSON.stringify(permSet, null, 1)}`)
  getPermutations(lastChar + strMinusLastChar, permSet)
}

const factorial = (n) => {
  return (n != 1 ? n * factorial(n-1) : 1)
}

console.log(getPermutations('cats', new Set()))

const setTest = () => {
  let newSet = new Set()
  newSet.add('hi')
  console.log(`newSet: ${JSON.stringify(newSet, null, 1)}`)
  console.log(newSet.has('hi'))
  console.log(newSet.has('hii'))
}

// setTest()