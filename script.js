const myLibrary = ["a","b","c"];
const container = document.querySelector(".container")
const showButton = document.querySelector(".new")
const closeButton = document.querySelector(".close")
const dialog = document.querySelector("dialog")
const addButton = document.querySelector(".add")
const input = document.querySelectorAll("input")

function Book(){

}

function check(){
    let tally = 0
    input.forEach((item) => {
     if(item.value || item.checked){
       tally++
     }
    })
    return tally
}

function addBookToLibrary(){

}

function reset(){
    input.forEach((item) =>{
        item.value="";
        item.checked = false
    })
}

function newBook(){
    let card = document.createElement("div")
    card.className = "card"
    card.textContent = "Hi"
    container.appendChild(card)
}


showButton.addEventListener("click", () =>{
dialog.showModal()
reset()
})
 closeButton.addEventListener("click", (event) => {
    dialog.close();
    reset()
    event.preventDefault()
 })

 addButton.addEventListener("click", (event) =>{
    let test = check()
    if(test === 4){
    newBook()
    event.preventDefault()
    dialog.close()
    reset()
    }else{
        alert("please fill out form")
    }event.preventDefault()
 })