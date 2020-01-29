export default class Library {
  constructor(inventory) {
    this.open = true;
    this.lent = [];
    this.inventory = inventory;
  }
  borrow(id) {
    if (this.open) {
      if (
        this.inventory.find(function(item) {
          return item.id === id;
        }) &&
        this.lent.indexOf(id) === -1
      ) {
        this.lent.push(id);
        return "Yay you have borrowed the book with id: " + id;
      } else {
        return "This book has been lent...";
      }
    } else {
      return "Sorry please come back when the library is open";
    }
  }
  returnItem(id) {
    let removeIndex = this.lent.findIndex(function(currentId) {
      return currentId === id;
    });

    if (removeIndex >= 0) {
      this.lent.splice(removeIndex, 1);
      return (
        "Thank-You for being responsible and returning the book with id: " + id
      );
    } else {
      return "This book has not been borrowed";
    }
  }
  toggleOpen() {
    this.open = !this.open;

    let message = this.open
      ? "The Library is now open"
      : "The library in now closed";

    return message;
  }
  addBook(title,author) {
    const newBook = {
        title: title, 
        author: author,
        id: this.inventory.length + 1
    }
    this.inventory.push(newBook)
    return `You have successfully added ${title} by ${author} to the library's inventory`
    
    

  }



















}

// const library = {
//     open: true,
//     inventory: [
//       { title: '1984', author: 'Orwell', id: 1 },
//       { title: 'Dune', author: 'Herbert', id: 2 },
//       { title: '1Q84', author: 'Murakami', id: 3 },
//     ],
//     lent: [],
//     borrow: function(id) {
//       if(this.open){
//         if (this.inventory.find(function(item) {
//           return item.id === id;
//         })
//         && this.lent.indexOf(id) === -1)
//       {
//         this.lent.push(id);
//         return "Yay you have borrowed the book with id: " + id
//       } else {
//         return 'This book has been lent...'
//       }
//       }else{
//         return "Sorry please come back when the library is open"
//       }
//     },
//     returnItem: function(id) {

//       let removeIndex = this.lent.findIndex(function(currentId) {
//           return currentId === id;
//       })

//       if (removeIndex >= 0)
//       {
//         this.lent.splice(removeIndex, 1);
//         return "Thank-You for being responsible and returning the book with id: " + id
//       } else {
//         return 'This book has not been borrowed'
//       }
//     },
//     toggleOpen: function() {
//       this.open = !this.open;

//       let message = this.open ? "The Library is now open" : "The library in now closed";

//       return message
//     },
//   };

//   console.log("toggle open: ",library.toggleOpen());
//   console.log("borrow book id 1: ",library.borrow(1));
//   console.log("current lent books: ",library.lent);
//   console.log("return book id 1: ",library.returnItem(1));
//   console.log("current lent books: ",library.lent);
//   console.log("toggle open: ",library.toggleOpen())
//   console.log("borrow book id 1: ",library.borrow(1));
//   console.log("current lent books: ",library.lent);
//   console.log("return book id 1: ",library.returnItem(1))
//   console.log("current lent books: ",library.lent);
//    console.log("return book id 1: ",library.returnItem(1))
