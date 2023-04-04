//your code here
// Get all the elements that store the prices
const cell = document.querySelectorAll('[data-ns-test="price"]');

// Calculate the sum of prices
let totalPrice = 0;
for (let i = 0; i < cell.length; i++) {
  totalPrice += parseFloat(cell[i].textContent);
}

// Add the total price to the table
const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
const grandTotalRow = grandTotalCell.parentNode;
const newRow = document.createElement('tr');
const newCell = document.createElement('td');
newCell.colSpan = 8;
newCell.textContent = `Total: $${totalPrice.toFixed(8)}`;
newRow.appendChild(newCell);
grandTotalRow.parentNode.insertBefore(newRow, grandTotalRow.nextSibling);
