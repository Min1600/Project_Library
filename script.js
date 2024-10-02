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

function readStatus(item, el){
 read.checked = !read.checked
 item = read.checked
test(item, el)
}


function test(item, el){
  el.textContent = ""
  item === true
  ?el.textContent += `Read: Already read`
  :el.textContent += `Read: Not read yet`
  }

function newBook(book){
  const card = document.createElement("div")
  const authorText = document.createElement("div")
  const titleText = document.createElement("div")
  const pagesText = document.createElement("div")
  const readText = document.createElement("div")
  const readButton = document.createElement("button")
  const removeBtn = document.createElement("button")

    card.className = "card"
    card.style.border = "solid black 1px"
  
    authorText.textContent = `Author: ${book.author}`
    titleText.textContent += `Title: ${book.title}`
    pagesText.textContent += `Number of Pages: ${book.pages}`
   test(book.read, readText)
    readButton.textContent = "Change read status"
    removeBtn.textContent = "Remove book from library"
    removeBtn.addEventListener("click", () => removeBook(card))
    readButton.addEventListener("click", () => readStatus(book.read, readText))

    container.appendChild(card)
    card.appendChild(authorText)
    card.appendChild(titleText)
    card.appendChild(pagesText)
    card.appendChild(readText)
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
   if(form.checkValidity()){
    addBookToLibrary()
    newBook(myLibrary[myLibrary.length-1])
    event.preventDefault()
    dialog.close()
   }
 })




