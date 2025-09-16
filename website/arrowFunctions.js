(a => console.log(a))("hello world")

let val = "test";

const test1 = function (a, b, c) {
    return a + b + c;
}

const test2 = (a, b, c) => a + b + c;

const test3 = (a, b, c) => {
    val = a + b + c;
    return val;
}

const test4 = a => a * 2;

const test5 = (a = 10, b = 20) => a + b;

val = test1(1, 2, 3);
val = test2(1, 2, 3);
val = test3(1, 2, 3);
val = test4(4);
val = test5(100);

const myObj = {
    a: 5,
    b: () => console.log("hello"),
    c: () => console.log(this), // this will be undefined
    d: function () { console.log(this.a) } // this will be 5
}

myObj.b();
myObj.c();
myObj.d();

console.log(val)
document.querySelector(".output").textContent = val;

const arr = [1, 2, 3, 4, 5];
const temp = arr.reduce((acc, val) => acc + val, 0);
console.log(temp);

const temp1 = arr.filter(a => a > 2);
console.log(temp1);

const temp2 = arr.map(a => a * 2);
console.log(temp2);