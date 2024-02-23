let score1 = 33;
let score2 = "33";
let score3 = "33aa";
let score4 = null;

console.log(typeof score1); // number
console.log(typeof score2); // string
console.log(typeof score3); // string
console.log(typeof score4); // object

let numscore2 = Number(score2);
let numscore3 = Number(score3);
let numscore4 = Number(score4);

console.log(typeof numscore2);
console.log(typeof numscore3);
console.log(typeof numscore4);

console.log(numscore2); // 33
console.log(numscore3); // NaN
console.log(numscore4); // 0

// 1 => true ,  0 => false
// "" => false
// "dhruv" => true
