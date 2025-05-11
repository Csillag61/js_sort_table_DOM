'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const tableBody = table.querySelector('tbody');
  const headers = table.querySelectorAll('thead th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tableBody.querySelectorAll('tr'));
      const isNumeric = !isNaN(
        rows[0].cells[index].textContent.replace(/\$|,/g, ''),
      );

      rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[index].textContent.trim();
        const cellB = rowB.cells[index].textContent.trim();

        return isNumeric
          ? parseFloat(cellA.replace(/\$|,/g, '')) -
              parseFloat(cellB.replace(/\$|,/g, ''))
          : cellA.localeCompare(cellB);
      });
      tableBody.innerHTML = ''; // Clear the table body
      rows.forEach((row) => tableBody.appendChild(row));
    });
  });
});
