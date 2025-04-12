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

function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.hidden = !details.hidden;
    button.setAttribute("aria-expanded", details.hidden ? "false" : "true");
    button.textContent = details.hidden ? "Read More ↓" : "Collapse ↑";
  };

document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.",
        "Cleopatra lived closer in time to the moon landing than to the construction of the Great Pyramid.",
        "The Roman Empire once spanned three continents: Europe, Asia, and Africa.",
        "The Indus Valley Civilization had one of the world's first urban sanitation systems.",
        "The Colosseum in Rome could hold up to 80,000 spectators in ancient times.",
        "The ancient Egyptians used a 365-day calendar based on the lunar cycle.",
        "The Hanging Gardens of Babylon are one of the Seven Wonders of the Ancient World, but their existence is still debated.",
        "The Terracotta Army was built to protect the tomb of China's first emperor, Qin Shi Huang.",
            "The Vikings were not just raiders; they were also traders, explorers, and settlers.",
            "The Sumerians are credited with inventing one of the first writing systems, cuneiform.",
            "The ancient Greeks held the first Olympic Games in 776 BCE, dedicated to Zeus.",
            "The Aztecs believed that the sun needed human blood to rise each day.",
            "The ancient Maya had a complex understanding of astronomy and created a calendar that was more accurate than the Gregorian calendar.",
            "The Rosetta Stone was key to deciphering Egyptian hieroglyphs.",
            "The ancient Romans used a system of aqueducts to transport water over long distances.",
            "The Silk Road was a network of trade routes that connected the East and West, facilitating cultural exchange.",
            "The ancient Egyptians believed in a pantheon of gods and goddesses, each with specific roles and attributes.",
            "The Parthenon in Athens was dedicated to the goddess Athena and served as a temple and treasury.",
    ];

    document.getElementById('refresh-fact').addEventListener('click', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById('fact').textContent = randomFact;
    });

    // Filter by Region Functionality
    const regionFilter = document.getElementById('region-filter');
    const cards = document.querySelectorAll('.card');

    regionFilter.addEventListener('change', () => {
        const selectedRegion = regionFilter.value;

        cards.forEach(card => {
            const cardRegion = card.getAttribute('data-region');
            if (selectedRegion === 'all' || cardRegion === selectedRegion) {
                card.style.display = 'block'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    });

    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex'; // Show the button
        } else {
            backToTop.style.display = 'none'; // Hide the button
        }
    });
});
