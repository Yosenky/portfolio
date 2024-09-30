document.addEventListener('DOMContentLoaded', () => {
    const projectTitles = document.querySelectorAll('.project-title');
    const prevButtons = document.querySelectorAll('.prev');
    const nextButtons = document.querySelectorAll('.next');
    let slideIntervals = {};

    // Function to show slide
    function showSlide(slides, index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Function to go to the next slide
    function nextSlide(slides, currentSlideVar) {
        return () => {
            window[currentSlideVar] = (window[currentSlideVar] + 1) % slides.length;
            showSlide(slides, window[currentSlideVar]);
        };
    }

    // Function to go to the previous slide
    function prevSlide(slides, currentSlideVar) {
        return () => {
            window[currentSlideVar] = (window[currentSlideVar] - 1 + slides.length) % slides.length;
            showSlide(slides, window[currentSlideVar]);
        };
    }

    // Initialize slideshows
    function initSlideshows() {
        document.querySelectorAll('.image-slideshow').forEach((slideshow, idx) => {
            const slides = slideshow.querySelectorAll('img');
            const currentSlideVar = `currentSlide${idx}`;

            window[currentSlideVar] = 0;
            showSlide(slides, window[currentSlideVar]);

            const next = nextSlide(slides, currentSlideVar);
            const prev = prevSlide(slides, currentSlideVar);

            if (slideIntervals[currentSlideVar]) clearInterval(slideIntervals[currentSlideVar]);
            slideIntervals[currentSlideVar] = setInterval(next, 1500);

            nextButtons[idx].addEventListener('click', () => {
                next();
                clearInterval(slideIntervals[currentSlideVar]);
                slideIntervals[currentSlideVar] = setInterval(next, 1500);
            });

            prevButtons[idx].addEventListener('click', () => {
                prev();
                clearInterval(slideIntervals[currentSlideVar]);
                slideIntervals[currentSlideVar] = setInterval(next, 1500);
            });
        });
    }

    // Handle project title selection
    projectTitles.forEach(title => {
        title.addEventListener('click', () => {
            projectTitles.forEach(item => item.classList.remove('selected'));
            title.classList.add('selected');
            const projectId = title.getAttribute("onclick").match(/'([^']+)'/)[1];
            toggleProjectDetails(projectId);
            scrollToContent(); // Ensure the scroll happens after toggling project details
        });
    });

    // Initially select "Space Cowboy Platformer"
    projectTitles[0].click();
    initSlideshows(); // Init slideshows on page load
});

function toggleProjectDetails(projectId) {
    const projectDetails = document.querySelectorAll('.project-details');
    projectDetails.forEach(detail => {
        detail.style.display = (detail.id === projectId) ? 'block' : 'none';
    });

    const selectedSection = document.querySelector(`#${projectId}`);
    if (selectedSection) {
        const slides = selectedSection.querySelectorAll('.image-slideshow img');
        if (slides.length > 0) {
            const currentSlideVar = `currentSlide${[...document.querySelectorAll('.project-details')].indexOf(selectedSection)}`;
            window[currentSlideVar] = 0;
            showSlide(slides, window[currentSlideVar]);
            if (!slideIntervals[currentSlideVar]) {
                slideIntervals[currentSlideVar] = setInterval(nextSlide(slides, currentSlideVar), 1500);
            }
        }
    }
}

function showSlide(slides, index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide(slides, currentSlideVar) {
    return () => {
        window[currentSlideVar] = (window[currentSlideVar] + 1) % slides.length;
        showSlide(slides, window[currentSlideVar]);
    };
}