
const stars = document.querySelectorAll('.star');
const reviewText = document.getElementById('review-text');
const submitButton = document.getElementById('submit-review');
const reviewsContainer = document.getElementById('reviews-container');
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener('click', (e) => {
        currentRating = e.target.getAttribute('data-rating');
        stars.forEach(s => {
            s.classList.remove('active');
            if (s.getAttribute('data-rating') <= currentRating) {
                s.classList.add('active');
            }
        });
    });
});

submitButton.addEventListener('click', () => {
    if (currentRating === 0 || reviewText.value.trim() === '') {
        alert('Please provide both a rating and a review.');
        return;
    }

    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `
        <p>Rating: ${'★'.repeat(currentRating)}${'☆'.repeat(5 - currentRating)}</p>
        <p>${reviewText.value}</p>
    `;

    reviewsContainer.appendChild(review);

    // Reset the form
    currentRating = 0;
    stars.forEach(s => s.classList.remove('active'));
    reviewText.value = '';
});
