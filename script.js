function toggleSection(section) {
    const content = document.getElementById(`${section}-content`);
    const title = document.querySelector(`.${section}-title`);
    
    if (content) {
        content.classList.toggle('active');
        title.classList.toggle('open');
    }
}

function toggleContent(section) {
    const content = document.getElementById(`${section}-content`);
    const toggleBox = document.querySelector(`.toggle-box.${section}-title`);
    
    if (content) {
        content.classList.toggle('active');
        if (toggleBox) {
            toggleBox.classList.toggle('open');
        }
    }
}

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
