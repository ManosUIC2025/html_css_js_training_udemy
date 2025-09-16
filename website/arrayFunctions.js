const arr1 = [1, 4, 54, 23, 5, 7, 34, 66];
const arr2 = ["Koufadakis", "a", "World", "He"];
const arr3 = ["Koufadakis", "Manos", "Cat", "Hello", "a", "World"];

let val = arr1.every(ele => {
    console.log(ele);
    return ele < 10
})

val = arr1.every(callBackFun);

function callBackFun(ele, index, array) {
    console.log(ele)
    console.log(index)
    console.log(array)
    return ele < 100
}

console.log(val);

console.clear();
val = arr2.every((ele) => {
    console.log(ele);
    return arr3.includes(ele);
})
console.log(val);

console.clear()

const numbers = [32, 43, 556, 2, 3, 4, 4345]
total = 0
/// not preferable way
// for (let i in numbers) {
//     console.log(numbers[i], total)
//     total += numbers[i]
// }

// this is faster, i, len initialized only once
for (let i = 0, len = numbers.length; i < len; i++) {
    console.log(numbers[i], total)
    total += numbers[i]
}
console.log(total)