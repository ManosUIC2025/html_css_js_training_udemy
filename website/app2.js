// Case sensitive
// Can't begin with 0-9
// can't use reserved JavaScript Keyword
/// var used prior to let and const introduction
let myName = "Manos Koufadakis";
console.log(myName);
myName = "Manos Smith";
console.log(myName);
const myName1 = "Manos 1";
///myName1 = 'Linda';
console.log(myName1);
if (true) {
    const myName1 = "Manos 2";
    console.log(myName1);
    // let myName = "Manos 3";
    console.log(myName);
}
