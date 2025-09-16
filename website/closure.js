// count is remembered because functions returns a closure function (which has access to a parent variable)
function myCount() {
    let count = 0;
    return function () {
        return count++;
    }
}

// count is not remembered
function myCount2() {
    let count = 0;
    count += 1;
    console.log(`count++: ${count}`)
    return count++
}
let cnt = myCount();
let cnt2 = myCount2;
console.log(cnt2)
for (let x = 0; x < 10; x++) {
    console.log(cnt());
    console.log(cnt2());
}


//closure with values
console.clear()
const output = document.querySelector('#output');
function adder(val) {
    return function (val2) {
        return val + val2;
    }
}

a2 = adder(10)
a3 = a2(10)
console.log(a3)

console.log(adder(10)(10))

let a1 = adder(15);
console.log(a1(2));
for (let x = 0; x < 10; x++) {
    output.innerHTML += `<div>Output ${(a1(2 + x))}</div>`;
}

//closure explained
console.clear()