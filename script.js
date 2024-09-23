function toggleResume() {
    const resumeContent = document.getElementById('resume-content');
    const resumeTitle = document.querySelector('.resume-title');

    if (resumeContent) {
        resumeContent.classList.toggle('active');
        resumeTitle.classList.toggle('open');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('main-header');
    
    // Automatically open the resume section on page load
    const resumeContent = document.getElementById('resume-content');
    const resumeTitle = document.querySelector('.resume-title');
    if (resumeContent) {
        resumeContent.classList.add('active');
        resumeTitle.classList.add('open');
    }

    // Retrieve animation status from local storage
    const animationState = localStorage.getItem('headerAnimationState');

    // If there's a saved state, apply it
    if (animationState) {
        header.classList.add(animationState);
    }

    // Save the animation state when the page is about to be unloaded
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('headerAnimationState', 'header-animation');
    });
});