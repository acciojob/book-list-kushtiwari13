// Get the form and table elements
const form = document.querySelector('form');
const tableBody = document.querySelector('#book-list');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input values
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const isbnInput = document.querySelector('#isbn');
  const title = titleInput.value;
  const author = authorInput.value;
  const isbn = isbnInput.value;

  // Create a new row for the table
  const newRow = document.createElement('tr');

  // Add the book data to the row
  newRow.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger btn-sm delete">X</button></td>
  `;

  // Add the row to the table body
  tableBody.appendChild(newRow);

  // Clear the form inputs
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
});

// Add a click event listener to the table body
tableBody.addEventListener('click', function(event) {
  // Check if the clicked element is the delete button
  if (event.target.classList.contains('delete')) {
    // Get the row to delete
    const row = event.target.parentElement.parentElement;

    // Remove the row from the table body
    tableBody.removeChild(row);
  }
});
