document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('main-header');

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

function toggleChampionDetails() {
    const championContent = document.getElementById('champion-content');
    const championTitle = document.querySelector('.champion-title');

    if (championContent) {
        if (championContent.style.display === "none" || championContent.style.display === "") {
            championContent.style.display = "block";
            championTitle.querySelector('.arrow').style.transform = 'rotate(180deg)';
        } else {
            championContent.style.display = "none";
            championTitle.querySelector('.arrow').style.transform = 'rotate(0deg)';
        }
    }
}
