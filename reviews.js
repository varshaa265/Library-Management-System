document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-container');
    const bookId = "yourBookId"; // Replace with the actual book ID

    fetch(`/api/reviews/${bookId}`)
    .then(response => response.json())
    .then(reviews => {
        // Update the UI to display the list of reviews
        const reviewsHtml = reviews.map(review => `<p>${review.content}</p>`).join('');
        reviewsContainer.innerHTML = reviewsHtml;
    })
    .catch(error => {
        console.error('Error fetching reviews:', error);
    });
});
