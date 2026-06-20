
let counT = document.getElementById("variable")
let addEL = document.getElementById("add")

let count = 0

function increase() {
    count += 1 
    counT.textContent = count
}

function save() {
    let conutstr = count + " - " 
    addEL.textContent += conutstr
    count = 0
    counT.textContent = count
}

