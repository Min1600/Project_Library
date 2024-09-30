const myLibrary = [];
const container = document.querySelector(".container")
const showButton = document.querySelector(".new")
const closeButton = document.querySelector(".close")
const dialog = document.querySelector("dialog")
const addButton = document.querySelector(".add")
const input = document.querySelectorAll("input")
const read = document.getElementById("read")
const author = document.querySelector("#author")
const title = document.querySelector("#title")
const pages = document.querySelector("#pages")
const form = document.querySelector("form")


function Book(){
this.author = author.value
this.title = title.value
this.pages = pages.value
this.read = read.checked
}

function reset(){
    input.forEach((item) =>{
        item.checked=false
        item.value = ""
   })}

function addBookToLibrary(){
let book = new Book()
myLibrary.push(book)
}

function removeBook(el){
  el.textContent = ""
  el.style.border = "none"
}

function readStatus(el){
el.checked = !el.checked
newBook(el)
}

function newBook(book){
  const card = document.createElement("div")
  const readButton = document.createElement("button")
  const removeBtn = document.createElement("button")

    card.className = "card"
    card.style.border = "solid black 1px"
    card.style.whiteSpace = "pre"
    card.textContent = `Author: ${book.author}\r\n`
    card.textContent += `Title: ${book.title} \r\n`
    card.textContent += `Number of Pages: ${book.pages} \r\n`
    card.textContent += `Read: ${book.read} \r\n`

    readButton.textContent = "Change read status"
    removeBtn.textContent = "Remove book from library"
    removeBtn.addEventListener("click", () => removeBook(card))
    readButton.addEventListener("click", () => readStatus(card))

    container.appendChild(card)
    card.appendChild(readButton)
    card.appendChild(removeBtn)
}

showButton.addEventListener("click", () =>{
dialog.showModal()
reset()
})
 closeButton.addEventListener("click", (event) => {
    dialog.close();
    event.preventDefault()
 })

 addButton.addEventListener("click", (event) =>{
   if(form.checkValidity){
    addBookToLibrary()
    newBook(myLibrary[myLibrary.length-1])
    event.preventDefault()
    dialog.close()
   }
 })




