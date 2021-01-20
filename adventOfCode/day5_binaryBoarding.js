const fs = require('fs')
const text = fs.readFileSync('./day5_binaryBoarding.txt', 'utf-8')
const input = text.split('\n')

const binaryBoarding = (input) => {
  let currMax = 0
  let seats = []
  for (let i = 0; i < input.length; i++) {
    let seat = input[i]
    let rangeMin = 0
    let rangeMax = 127
    let row = undefined
    let column = undefined
    for (let j = 0; j < seat.length; j++) {
      let midPoint = Math.floor((rangeMax - rangeMin) / 2) + rangeMin
      if (j < 7) {
        seat[j] === 'F' ?
        rangeMax = midPoint :
        rangeMin = midPoint
        if (j === 6) {
          row = rangeMax
          rangeMin = 0
          rangeMax = 7
        }
      }
      if (j >= 7) {
        seat[j] === 'L' ?
        rangeMax = midPoint :
        rangeMin = midPoint
        if (j === 9) {
          column = rangeMax
          let seatId = (row * 8) + column
          seats.push(seatId)
          if (seatId > currMax) currMax = seatId
        }
      }
    }
  }
  seats.sort((a, b) => a - b)
  for (let i = 0; i < seats.length; i++) {
    let currSeat = seats[i]
    let nextSeat = seats[i + 1]
    if (nextSeat === currSeat + 2) return currSeat + 1
  }
  // console.log(`seats: ${JSON.stringify(seats, null, 1)}`)
  // return currMax
}

console.log(binaryBoarding(input))