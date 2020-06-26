let somePrices = [5, 12, 9, 2, 1, 5, 5]
let somePrices2 = [3, 2, 1]

let appleStocks = (prices) => {
  if (prices.length < 2) {
    return console.log('not enough data')
  }

  let minPrice = prices[0]
  let maxProfit = prices[1] - prices[0]

  for (let i = 1; i < prices.length; i++) {
    let currPrice = prices[i]
    let currProfit = currPrice - minPrice
    minPrice = Math.min(currPrice, minPrice)
    maxProfit = Math.max(currProfit, maxProfit)
  }

  return maxProfit
}

console.log(appleStocks(somePrices)) // 7
console.log(appleStocks(somePrices2)) // -1