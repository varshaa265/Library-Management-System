// Function to fetch reviews from the backend
function fetchReviewsForBook(bookName) {
    fetch(`http://localhost:3000/api/reviews/${encodeURIComponent(bookName)}`)
      .then(response => response.json())
      .then(reviews => {
        // Handle the fetched reviews, e.g., update your HTML to display them
        console.log(`Reviews for ${bookName}:`, reviews);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }
  
  // Example usage
  const bookName = "Sample Title";
  fetchReviewsForBook(bookName);
  
  // Rest of your frontend code remains the same
  