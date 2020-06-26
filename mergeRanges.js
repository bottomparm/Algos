// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

let sampleRanges = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

const mergeRanges = (ranges) => {

  ranges.sort((a, b) => {
    return a.startTime - b.startTime
  })
  
  let mergedRanges = [ranges[0]]

  for (let i = 1; i < ranges.length; i++) {
    let currRange = ranges[i]
    let mergedRange = mergedRanges[mergedRanges.length - 1]

    if (currRange.startTime <= mergedRange.endTime) {
      mergedRanges[mergedRanges.length - 1] = 
        { startTime: mergedRange.startTime,
          endTime: Math.max(currRange.endTime, mergedRange.endTime) }
    } else {
      mergedRanges.push(currRange)
    }
  }
  console.log(`mergedRanges: ${JSON.stringify(mergedRanges, null, 1)}`)
  return mergedRanges

}

mergeRanges(sampleRanges)