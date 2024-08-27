const myLibrary = [
  
];
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
const card = document.createElement("div")
const form = document.querySelector("form")
const readButton = document.createElement("button")
const removeBtn = document.createElement("button")

class Book{
  constructor(){
this.author = author.value
this.title = title.value
this.pages = pages.value
this.read = read.checked
  }

}


function readStatus(){
  input.forEach((item) =>{
    item.checked=!item.checked
})
this.read = read.checked
newBook(myLibrary[myLibrary.length-1])
}

function  reset(){
  input.forEach((item) =>{
      item.checked=false
      item.value = ""
 })}

function 
addBookToLibrary(){
 let book = new Book()
 myLibrary.push(book)
 }

function newBook(book){
  readButton.textContent = "Change read status"
  removeBtn.textContent = "Remove book from library"
  card.className = "card"
  card.innerHTML = 
  `<p>Author: ${book.author}</p>
  <p>Title: ${book.title}</p>
  <p>Number of Pages: ${book.pages}</p>
   <p>Read: ${book.read}</p>`
  container.appendChild(card)
  card.appendChild(readButton)
  card.appendChild(removeBtn)
}

function removeBook(){
card.innerHTML = ""
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


readButton.addEventListener("click", () => myLibrary[myLibrary.length-1].readStatus())

removeBtn.addEventListener("click", () => removeBook())