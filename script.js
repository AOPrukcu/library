const getTheTitles = function (arr) {
  return arr.map((element) => element.title);
};
var container = document.querySelector(".container");

const myLibrary = [{ author: "mark", title: "bells", pages: 120, read: true }];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
const btn = document.querySelector("#submit");
btn.addEventListener("click", createBook);

function addBookToLibrary(library, book) {
  library.push(book);
  console.log(library);
}

function createBook() {
  let author = document.querySelector("#author").value;
  let title = document.querySelector("#title").value;
  let pages = +document.querySelector("#page").value;
  let read = document.querySelector("#read").checked;
  console.log(author, title, pages, read);
  var book = new Book(author, title, pages, read);
  addBookToLibrary(myLibrary, book);
}

// function display(library) {
//   let length = library.length;
//   library.forEach((element) => {
//     var i =document.createElement("div").classList.add("card")
//     i.textContent = element.author + " " + element.title + " " + element.pages + " " + element.read
//     container.appendChild(i);
//   });
// }
btn_display = document.querySelector("#display").addEventListener("click",()=> {

    container.innerHTML = ""; 
    myLibrary.forEach((element, index) => {
        var card = document.createElement("div");
        card.classList.add("card");
        card.textContent = `${element.author} ${element.title} ${element.pages} ${element.read}`;
        
       
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => {
            removeBook(index);
        };
        
        
        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.textContent = element.read ? "Mark as Unread" : "Mark as Read";
        toggleReadBtn.onclick = () => {
            toggleReadStatus(index);
        };
        
        card.appendChild(removeBtn);
        card.appendChild(toggleReadBtn);
        container.appendChild(card);
    })
  })

  function removeBook(index) {
    myLibrary.splice(index, 1); 
  
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read; 
   
}
 