// function isPostive(num){
//     return num>0
// }

// console.log(isPostive(1101))

// function factorial(num){
//     if(num==1)
//         return 1
//     return num*factorial(num-1)
// }
// console.log(factorial(5))

// let volume = (l,b,h) => {return l*b*h}
// console.log(volume(1,2,3))

let priceUSD = [20,35,13]
let priceINR = priceUSD.map(x => x*83)
console.log(priceINR)

priceINR = priceUSD.map(convert)
function convert(val){
    return val*83
}
console.log(priceINR)