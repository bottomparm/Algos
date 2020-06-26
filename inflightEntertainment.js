let moviePicker = (flightTime, movieTimes) => {
  let low = 0
  let high = movieTimes.length - 1
  let sorted = movieTimes.sort((a, b) => a - b)
  console.log(sorted)

  while (low < high) {
    let currTotal = sorted[low] + sorted[high]
    if (currTotal === flightTime) {
      return true
    } else if (currTotal > flightTime) {
      high--
    } else if (currTotal < flightTime) {
      low++
    }
  }

  return false
}

console.log(moviePicker(5, [1, 3, 2, 7, 12]))
console.log(moviePicker(5, [4, 9, 63, 101, 2000]))


// INTERVIEW CAKE OPTIMIZED SOLUTION
function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}