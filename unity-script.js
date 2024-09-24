document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('main-header');

    // Open default project on page load
    showProject('project1');

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

function showProject(projectId) {
    const projects = document.querySelectorAll('.portfolio-item');
    projects.forEach(project => {
        if (project.id === projectId) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
}