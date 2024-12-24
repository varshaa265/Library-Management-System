document.addEventListener('DOMContentLoaded', () => {
    const submitReviewButton = document.getElementById('submit-review-button');
    const reviewContentInput = document.getElementById('review-content');

    submitReviewButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        const bookId = "yourBookId"; // Replace with the actual book ID
        const reviewContent = reviewContentInput.value;

        fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookId, review: reviewContent }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // Update UI or provide feedback to the user
        })
        .catch(error => {
            console.error('Error saving review:', error);
        });
    });
});
