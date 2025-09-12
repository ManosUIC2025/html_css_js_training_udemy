let boo = true; //null 0 undefined
if (boo == true) {
    console.log('boo is true');
} else if (boo == false) {
    console.log('boo is false');
} else {
    console.log('boo is something else');
}
let a = 40;
let b = 10;
checker(50, 100);
checker("ghhg", 10);
checker(80, 100);
function checker(a, b) {
    let res;
    if (a > b) {
        res = (a + ' is bigger than ' + b);
    } else {
        res = (a + ' was not bigger than ' + b);
    }
    console.log(res);
}