// let numbers = [1, 3, 2, 5]

// let sum = 0

// for (var i in numbers) {
//     if (numbers[i] % 2 == 0) continue;
//     sum += numbers[i]
//     // console.log(numbers[i]);


// }
// console.log(sum);

// Platform : //
var exnumbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var exsum = 0;
for (var i in exnumbers) {
    // console.log(i);  =>index
    if (i % 2 == 0) continue;
    exsum += exnumbers[i]
}

console.log(exsum);
// prints 78