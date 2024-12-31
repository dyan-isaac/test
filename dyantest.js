document.addEventListener('DOMContentLoaded', () => {
  const span = document.createElement('span');
  span.textContent = "Hello, this is a test span inside the header!";
  span.style.color = "blue";
  span.style.fontWeight = "bold";

  // Append the span to the header
  const header = document.querySelector('#content-header');
  if (header) {
    header.appendChild(span);
  } else {
    console.warn('No <header> element found in the document.');
  }
});
