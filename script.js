document.querySelector('.scroll-down').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
        behavior: 'smooth', // Enables smooth scrolling
        block: 'start' // Scrolls to the top of the target section
    });
});

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function () {
        const cardDetails = this.previousElementSibling; // Select the .card-details div
        const isVisible = cardDetails.style.display === 'block';

        // Toggle visibility
        cardDetails.style.display = isVisible ? 'none' : 'block';

        // Update button text
        this.textContent = isVisible ? 'Read More' : 'Read Less';
    });
});

const facts = [
    "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.",
    "The Roman Empire once spanned three continents: Europe, Asia, and Africa.",
    "The Indus Valley Civilization had one of the world's first urban sanitation systems.",
    "Cleopatra lived closer in time to the moon landing than to the construction of the Great Pyramid.",
    "The Colosseum in Rome could hold up to 80,000 spectators in ancient times."
];

document.getElementById('refresh-fact').addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').textContent = randomFact;
});
