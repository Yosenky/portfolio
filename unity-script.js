document.addEventListener('DOMContentLoaded', () => {
    const projectTitles = document.querySelectorAll('.project-title');
    const slides = document.querySelectorAll('.image-slideshow img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    // Function to show slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Set an interval to go to the next slide every 2 seconds
    slideInterval = setInterval(nextSlide, 2000);

    // Event listeners for the prev/next buttons
    prevButton.addEventListener('click', () => {
        prevSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 2000);
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 2000);
    });

    // Show the first slide initially
    showSlide(currentSlide);

    // Handle project title selection
    projectTitles.forEach((title) => {
        title.addEventListener('click', () => {
            projectTitles.forEach(item => item.classList.remove('selected'));
            title.classList.add('selected');
            const projectId = title.getAttribute("onclick").match(/'([^']+)'/)[1];
            toggleProjectDetails(projectId);
        });
    });

    // Initially select "Space Cowboy Platformer" (first project by default)
    document.querySelector('.project-title.selected').click();
});

function toggleProjectDetails(projectId) {
    const projectDetails = document.querySelectorAll('.project-details');
    projectDetails.forEach(detail => {
        if (detail.id === projectId) {
            detail.style.display = 'block';
        } else {
            detail.style.display = 'none';
        }
    });
}
