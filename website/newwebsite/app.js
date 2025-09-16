// document.querySelector('.menu').onclick = function () {
//     console.log('clicked');
//     document.querySelector('.hideMenu').classList.toggle('hide');
// }

document.querySelector('.menu').addEventListener("click", (e) => {
    console.log('clicked:');
    document.querySelector('.hideMenu').classList.toggle('hide');
});