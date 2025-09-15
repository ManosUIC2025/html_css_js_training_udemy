const btn = document.querySelector('button');
let counter = 0;
btn.addEventListener('click', btnClicked);
function btnClicked(e) {
    console.log(e.target.id);
    e.target.id = 'NEW' + counter;
    counter++;
    console.log('clicked ' + counter);
    e.target.textContent = 'Clicked (' + counter + ')';
    e.target.classList.toggle('box');
}

const h1 = document.querySelector('h1');
h1.onclick = btnClicked;

const holder = document.querySelector('.holder');
// const divs = holder.querySelectorAll('div');
// console.log(divs);
// //console.clear();
// divs.forEach((el, ind) => {
//     const val = el.className;
//     // el.onclick = function () {
//     //     console.log('onclick ' + val);
//     // }

//     el.addEventListener('click', (e) => {
//         console.log('event True ' + val);
//     }, true);
//     el.addEventListener('click', (e) => {
//         console.log('event False ' + val);
//     }, false);
// })

one = holder.querySelector('.one');
one.addEventListener('click', (e) => {
    console.log('event one ' + e.target.className);
    e.stopPropagation();
    //e.stopImmediatePropagation();
}, true);

two = holder.querySelector('.two');
two.addEventListener('click', (e) => {
    console.log('event two ' + e.target.className);
    //e.stopPropagation();
}, true);

three = holder.querySelector('.three');
three.addEventListener('click', (e) => {
    console.log('event three ' + e.target.className);
    //e.stopPropagation();
}, false);