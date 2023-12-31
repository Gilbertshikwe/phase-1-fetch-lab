function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
// Define the fetchBooks function
function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Convert the response to JSON
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
    
      console.log('Error fetching books:', error);
    });
}

// Define the renderBooks function to display the fetched data
function renderBooks(data) {

  const booksList = document.getElementById('booksList');

  booksList.innerHTML = '';


  data.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; 
    booksList.appendChild(listItem);
  });
}


window.addEventListener('load', fetchBooks);
