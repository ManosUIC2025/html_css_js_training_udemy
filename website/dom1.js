console.dir(document);
let val = document.URL;
console.log(val);
let ele = document.getElementById("outputID") //querySelector('#outputID');
console.dir(ele);
console.dir(ele.textContent);
ele.textContent = "Hello World";
let myDOM = {
    URL: "My URL",
    children: [
        {
            html: {
                "body": "Content"
            }
        }
    ]
}