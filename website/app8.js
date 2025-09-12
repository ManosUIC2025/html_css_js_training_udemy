for (let x = 0; x < 10; x++) {
    //console.log(x);
}
let x = 100;
while (x < 10) {
    console.log(x);
    x++;
}
do {
    //console.log(x);
    x++;
}
while (x < 10)
//console.log(x);
const test = [10, 34, 54, 32, 32234, 3234];
//console.log(test.length);
for (let x = 0; x < test.length; x++) {
    //console.log(test[x]);

}
for (let item of test) {
    //console.log(item);
}

// x is the index
for (let x in test) {
    //console.log(x + " = " + test[x]);
}
test.forEach(function (val, index, array) {
    console.log(val + ' ' + index);
});
const myObj = {
    first: 'MAnos',
    last: 'Koufadakis',
    one: 1,
    two: 2,
    three: 3
}

//x is the key
for (let x in myObj) {
    //console.log(x + ':' + myObj[x]);
}