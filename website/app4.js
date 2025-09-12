const myArr = ['string', 100, true];
//console.log(myArr);

//console.log(myArr[0]);
myArr[0] = 'New Value';
//console.log(typeof myArr);
const myObj = {
    first: 'string',
    val: 100,
    boo: true
};
let myObj2 = myObj;
myObj2.first = 'New Value';
console.log(myObj);
console.log(myObj2);
myObj2 = { first: 'Another Value' };
console.log(myObj);
console.log(myObj2);
//console.log(typeof myObj);
//console.log(myObj['boo']);
myObj['boo'] = 'New Value';
//console.log(myObj.boo);
const myName = {
    first: 'Laurence',
    last: 'Svekis',
    arr: [1, 2, 3, 4],
    myObj: {
        one: 'one',
        two: 'two'
    }
}
console.log(myName.myObj.one);
console.log(myName["myObj"]['one']);