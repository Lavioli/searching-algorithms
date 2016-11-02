/*
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98,97, 105]. If you had to buy shares in the company on one day, and sell the shares on one of the following days, write an algorithm to work out what the maximum profit you could make would be.
*/
var comparePrices = function(a,b){
    return a-b
}

var biggestProfit = function (sharePrice){
    var sortedPrices = sharePrice.sort(comparePrices);
    console.log(sortedPrices);
    return (sortedPrices[sortedPrices.length - 1]) - (sortedPrices[0]);
};

console.log(biggestProfit([128, 97, 121, 123, 98, 97, 105]));