//let day = "31";
//let month = "12";

// if (typeof day === 'string' && typeof month === 'string') {
//     console.log('those are strings!');
// }

// if (day === 31 && month === 12) {
//     console.log("Today is the new year's eve!");
// } else if (day == 3 && month == 10) {
//     console.log("Today is Germany's unification day!");
// } else {
//     console.log("Today is an ordinary day!");
// }

// let result = true;

// if (result === "abc") {
//     console.log("result is false");
// }


let price;

let day = 25;

let isDiscounted = true;
let saleDay = day === 10 || day === 20 || day === 30;

// price = isDiscounted && saleDay ? 100 : 200;

// if (isDiscounted && saleDay) {
//     price = 100;
// } else {
//     price = 200;
// }



price = isDiscounted ? (saleDay ? 50 : 100) : 200;

// console.log(price);


