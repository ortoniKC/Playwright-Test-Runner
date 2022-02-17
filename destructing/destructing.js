
// Destructuring assignment

let fruits = ["apple", "mango", "grape", "banana"];
// let first = fruits[0]
// console.log(first);
let [first, sec, thr, last] = fruits;
console.log(first, thr, last);
// let [first, , thr] = fruits
// console.log(thr);
let [a, ...rest] = fruits
console.log(a);
console.log(rest);

let nums = getRandomNum();
console.log(nums);

const myBio = {
    fullName: {
        fname: "k",
        lname: "c"
    },
    age: 27,
    gender: "m"
}
console.log(myBio);
let { fullName: { lname, fname }, age, gender } = myBio;
console.log(lname, fname);

// console.log(fname, age, gender);
// let myName = myBio.fname;
// console.log(myName);


function getRandomNum() {
    const num = Math.random() * 9999;
    return num.toString();
}
