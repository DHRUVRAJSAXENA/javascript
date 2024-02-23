// > < == =< =>

console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); //true
// the reason is that an equality checker "==" and compariosion <> >= <= works differntly.
// comparision convert null into "0"
