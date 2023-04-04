//your code here
// Get all the elements that store the prices
const prices = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate the sum of prices
let totalPrice = 0;
for (let i = 0; i < prices.length; i++) {
  totalPrice += parseFloat(prices[i].textContent);
}

// Add the total price to the table
const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
const grandTotalRow = grandTotalCell.parentNode;
const newRow = document.createElement('tr');
const newCell = document.createElement('td');
newCell.colSpan = 2;
newCell.textContent = `Total: $${totalPrice.toFixed(2)}`;
newRow.appendChild(newCell);
grandTotalRow.parentNode.insertBefore(newRow, grandTotalRow.nextSibling);
