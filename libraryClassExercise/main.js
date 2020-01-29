import Library from "./Library.js";
import Book from "./Book.js";

document.addEventListener("DOMContentLoaded", function() {
  console.log("working");
  let inventory = [
    { title: "1984", author: "Orwell", id: 1 },
    { title: "Dune", author: "Herbert", id: 2 },
    { title: "1Q84", author: "Murakami", id: 3 }
  ];

  const inventoryOfBooks = inventory.map(book => {
    return new Book(book.title, book.author);
  });

  const torontoLib = new Library(inventoryOfBooks);
 
  inventoryOfBooks.forEach(book=>{
    torontoLib.addBook(book)
  })



  const openBtn = document.getElementById("openBtn");
  const openSign = document.getElementById("openSign");

  openBtn.addEventListener("click", () => {
    torontoLib.toggleOpen();
    openSign.innerText = torontoLib.open ? "open" : "closed"; //this is if statement
  });

  //display current inventory on the screen
  //save reference to ul in a variable
  const inventoryList = document.getElementById("inventoryList");

  //create a function that displays current inventory
  //so you can call it after a new book is added, as well as when the page is loaded

  function displayInventory() {
    inventoryList.innerHTML = "";
    inventory.map(book => {
      const li = document.createElement("li");
      const textString = `ID ${book.id}  '${book.title}'  Author ${book.author}`;
      li.appendChild(document.createTextNode(textString));
      inventoryList.appendChild(li);
    });
  }

  //allow the user to borrow a book by entering its id in a textbox

  //save the borrowed book form into a variable
  const input = document.getElementById("borrowBookForm");
  //set up an event listener for a submit event on the form
  borrowBookForm.onsubmit = function(event) {
    ////prevent submit's default behaviour
    event.preventDefault();
    ////get the id of the book to be borrowed
    const bookID = parseInt(event.target[0].value, 10);
    ////call the library's borrow function and pass the id to it
    alert(torontoLib.borrow(bookID));
    ////clear the text box
    event.target[0].value = "";
  };

  //save the return form into a variable
  const returnInput = document.getElementById("returnBookForm");
  //set up an event listener for a submit event on the return form
  returnBookForm.onsubmit = function(event) {
    ////prevent submit's default behaviour
    event.preventDefault();
    ////get the id of the book to be returned
    const bookID = parseInt(event.target[0].value, 10);
    ///call the library's return function and pass the id to it
    alert(torontoLib.returnItem(bookID));
    ////clear the text box
    event.target[0].value = "";
  };

  //save the addbook for into a variable
  const addBookForm = document.getElementById("addBookForm");
  //set up an event listener for a submit event on the form
  addBookForm.onsubmit = function(event) {
    ////prevent submit's default behaviour
    event.preventDefault();
    ////pull out the value of the title and the author from the form
    const title = event.target[0].value;
    const author = event.target[1].value;
    ////call the library's addbook function and pass the title and the author to it
    alert(torontoLib.addBook(title, author));
    ////clear the form data
    event.target[0].value = "";
    event.target[1].value = "";
    ////call displayInventory
    displayInventory();
  };

  //   alert(torontoLib.addBook("Best Book","Me"))
  displayInventory();
});
