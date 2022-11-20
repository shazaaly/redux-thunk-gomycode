
// let gen = {
//   '-3': ["great grandfather", "great grandmother"],
//   '-2': [" grandfather", " grandmother"],
//   '-1': ["father", "mother"],
//   '0': ["me"],
//   '1': ['son', 'daugther'],
//   '2': ["great son", "great daugthter"],
// }
// function getGen(x, y) {
//   return x == 'm' ? gen[x][0] : gen[x][1]



// }

let dolphins = [2, 5, 8, 5]
let fishes = [2, 5, 8, 5]

let sum = 0
let average = 0
let roundedAverage = 0

const getAverage = (arr) => {


  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    average = sum / arr.length
    roundedAverage = Math.ceil(average)

  }
  return roundedAverage
}

console.log(getAverage(dolphins));
console.log(getAverage(fishes));

// let name = 'Shaza'
// console.log(name.indexOf('S'));