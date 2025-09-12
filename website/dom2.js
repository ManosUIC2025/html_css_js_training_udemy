const ele1 = document.getElementById('myEle'); //get by ID
console.log(ele1);

const ele2 = document.querySelector('.output'); //get by class, use "." before class name
console.log(ele2);

const val1 = 'h1';
const ele3 = document.querySelector(val1); //get by tag name, no prefix
console.log(ele3);

const ele4 = document.querySelector('#myEle'); //get by ID, use "#" before ID value
console.log(ele4);
console.log(ele1.textContent);
ele1.textContent = 'Manos Koufadakis';
console.log(ele4.textContent);

const myObj1 = {
    first: "Manos"
}
const my1 = myObj1;
const my2 = myObj1;
my1.first = "Koufadakis";
console.log(my2);
const eles1 = document.querySelectorAll('.output');
console.log(eles1);
const eles2 = document.querySelectorAll('h1');
console.log(eles2);
//console.clear();
eles1.forEach(function (ele, ind) {
    console.log(ele.textContent);
    ele.textContent = 'My Element ' + ind;
})