let numIslands = function(grid) {
    // let islandCheck = grid
    let islandQueue = []
    let islandCount = 0
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === '1') {
          console.log(`island: ${[i, j]}`)
          islandCount++
          islandQueue.push([i, j])
          grid[i][j] = 0
          
          while (islandQueue.length >= 1) {
            console.log(`islandQueue.length: ${islandQueue.length}`)
            console.log(islandQueue)
            console.log(grid)
            let iIdx = islandQueue[0][0]
            let jIdx = islandQueue[0][1]
            let aboveIdx = islandQueue[0][0] - 1
            let belowIdx = islandQueue[0][0] + 1
            let rightIdx = islandQueue[0][1] + 1
            let leftIdx = islandQueue[0][1] - 1
            
            if (grid[belowIdx] && grid[belowIdx][jIdx] === '1') {
              islandQueue.push([belowIdx, jIdx])
              grid[belowIdx][jIdx] = 0
            }
            if (grid[aboveIdx] && grid[aboveIdx][jIdx] === '1') {
              islandQueue.push([aboveIdx, jIdx])
              grid[aboveIdx][jIdx] = 0
            }
            if (grid[iIdx][rightIdx] && grid[iIdx][rightIdx] === '1') {
              islandQueue.push([iIdx, rightIdx])
              grid[iIdx][rightIdx] = 0
            }
            if (grid[iIdx][leftIdx] && grid[iIdx][leftIdx] === '1') {
              islandQueue.push([iIdx, leftIdx])
              grid[iIdx][leftIdx] = 0
            }
            islandQueue.shift()
          }
        }
        
      }
    }
  
  return islandCount
    
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))