const fs = require('fs')
const text = fs.readFileSync('./day6_customCustoms.txt', 'utf-8')
const input = text.split('\n')

const customCustoms = (input) => {
  console.log(`input: ${JSON.stringify(input, null, 1)}`)
  
}

customCustoms(input)