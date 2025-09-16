const url = "my1.json"
const output = document.querySelector("#output");
output.addEventListener("click", getJSONData)

function getJSONData() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            myOutput(data)
        })
        .catch(error => {
            console.error("ERROR:", error)
        })
}

function myOutput(data) {
    console.log(data)
    output.innerHTML = `<p>${data.name}</p><p>${data.age}</p>`
}


//getJSONData()
