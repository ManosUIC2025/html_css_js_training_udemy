//console.log(myFun2());
//myFun2();
///myFun2();
const val2 = myFun2();
//console.log(val);
const myFun1 = function () {
    //console.log('Fun 1');
    return '1';
}
const val1 = myFun1();
//console.log(val1);
//myFun1();
//myFun1();
const myFun3 = function () {
    //console.log('Fun 3');
    return '3';
}();
//console.log(myFun3);
function myFun2() {
    //console.log('Fun 2');
    return '2';
}
let val = 100;
val = adder(5, 10);
console.log(val);
console.log(adder(7, 80));
console.log(adder(117, 80));
let a = 50;
let b = 94;
let test = a + ' + ' + b + ' = ' + adder(a, b);
console.log(test);
console.log(a + ' + ' + b + ' = ' + adder(a, b));
function adder(a, b) {
    //let val = 100;
    console.log(val);
    return a + b * 1;
    console.log('message');
}