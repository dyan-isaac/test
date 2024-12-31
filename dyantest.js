document.addEventListener('DOMContentLoaded', () => {
  const tableData = [
    ["Name", "Age", "Occupation"],
    ["John Doe", 30, "Software Developer"],
    ["Jane Smith", 25, "Graphic Designer"],
    ["Sam Johnson", 35, "Product Manager"],
  ];

  // Create the table
  const table = document.createElement('table');
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  // Populate the table
  tableData.forEach((rowData, rowIndex) => {
    const row = document.createElement('tr');
    rowData.forEach((cellData) => {
      const cell = rowIndex === 0 ? document.createElement('th') : document.createElement('td');
      cell.textContent = cellData;
      cell.style.border = "1px solid #ddd";
      cell.style.padding = "8px";
      if (rowIndex === 0) {
        cell.style.backgroundColor = "#f4f4f4";
        cell.style.textAlign = "left";
      }
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  // Append the table to the header
  const header = document.querySelector('header');
  if (header) {
    header.appendChild(table);
  } else {
    console.warn('No <header> element found in the document.');
  }
});
