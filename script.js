// Add an event listener to each article title
const articleTitles = document.querySelectorAll('.title');

articleTitles.forEach(title => {
  title.addEventListener('click', (event) => {
    // Prevent the default link behavior (opening in a new tab)
    event.preventDefault();

    // Get the Telegraph URL from the title's href attribute
    const telegraphUrl = title.getAttribute('href');

    // Find the iframe within the article
    const iframe = title.parentNode.querySelector('.telegraph-container iframe');

    // Update the iframe's src attribute with the Telegraph URL (using proxy)
    iframe.src = http://localhost:3000/telegraph/${telegraphUrl}; 
  });
});
