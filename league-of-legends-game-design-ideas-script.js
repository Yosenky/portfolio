document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('main-header');
    const allContent = document.querySelectorAll('.champion-details');

    // Hide all champion details by default
    allContent.forEach(content => content.style.display = 'none');

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

function toggleChampionDetails(id) {
    const allContent = document.querySelectorAll('.champion-details');
    allContent.forEach(content => {
        if (content.id === id) {
            content.style.display = content.style.display === "block" ? "none" : "block";
        } else {
            content.style.display = "none";
        }
    });
}