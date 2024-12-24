const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');


const app = express();
const PORT = 3000; // You can use any port you prefer
app.use(cors());
// Mock database for storing reviews (in-memory)
const reviewsByBook = {};

app.use(bodyParser.json());

// Route to save a review for a book
// Route to save a review for a book
app.post('/api/reviews', (req, res) => {
    const { bookName, review } = req.body;

    if (!reviewsByBook[bookName]) {
        reviewsByBook[bookName] = [];
    }

    reviewsByBook[bookName].push(review);
    console.log(review);

    res.status(201).json({ message: `Review saved successfully for book "${bookName}"` });
});


// Function to fetch reviews for a specific book
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
const bookName = "Sample Title"; // Replace with the actual book name
fetchReviewsForBook(bookName);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});