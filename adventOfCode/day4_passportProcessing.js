const fs = require('fs')
const text = fs.readFileSync('./day4_passportProcessing.txt', 'utf-8')
const input = text.split('\n')

const validPassports = (input) => {
  let numOfValid = 0
  let currEntry = []
  for (let i = 0; i < input.length; i++) {
    let line = input[i]
    if (line === '' || i === input.length - 1) {
      if (i === input.length - 1) currEntry.push(...line.split(' '))
      if (currEntry.length === 8) {
        // numOfValid++
        numOfValid += validEntries(currEntry)
      } else if (currEntry.length === 7) {
        for (let j = 0; j < currEntry.length; j++) {
          const field = currEntry[j].split(':')
          if (field[0] === 'cid') {
            break
          } else if (j === currEntry.length - 1) {
            // numOfValid++
            numOfValid += validEntries(currEntry)
          }
        }
      }
      currEntry = []
    } else {
      currEntry.push(...line.split(' '))
    }
  }
  return numOfValid
}

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

// ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
// byr:1937 iyr:2017 cid:147 hgt:183cm

const validEntries = (fields) => {
  let entryValid = true
  for (let i = 0; i < fields.length; i++) {
    let field
    let value
    [field, value] = fields[i].split(':')
    if (!entryValid) {
      return 0
    } else if (field !== 'cid') {
      entryValid = validators[field](value)
      // if (entryValid && field === 'pid') {
      //   console.log(`field: ${field}, value: ${value}`)
      // }
    }
  }
  if (!entryValid) return 0
  else return 1
}

const validators = {
  byr: (value) => {
    if (!isNaN(value) && value >= 1920 && value <= 2002) return true
    else return false
  },
  iyr: (value) => {
    if (!isNaN(value) && value >= 2010 && value <= 2020) return true
    else return false
  },
  eyr: (value) => {
    if (!isNaN(value) && value >= 2020 && value <= 2030) return true
    else return false
  },
  hgt: (value) => {
    if ((value.slice(-2) === 'cm' && +value.slice(0, -2) >= 150 && +value.slice(0, -2) <= 193) ||
        (value.slice(-2) === 'in' && +value.slice(0, -2) >= 59 && +value.slice(0, -2) <= 76)) {
      return true
    } else return false
  },
  hcl: (value) => {
    if (value[0] === '#') {
      let isValid = value.length === 7
      for (let i = 1; i < value.length; i++) {
        if (!isValid) {
          return false
        } else {
          let regex = new RegExp(/[a-f|0-9]/)
          isValid = regex.test(value[i])
        }
      }
      return true
    } else {
      return false
    }
  },
  ecl: (value) => {
    const colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
    if (colors.includes(value)) return true
    else return false
  },
  pid: (value) => {
    if (!isNaN(value) && value.toString().length === 9) {
      return true
    } 
    else return false
  },
}

console.log(validPassports(input))