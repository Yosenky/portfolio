document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('main-header');

    // Automatically open the resume section on page load
    const resumeContent = document.getElementById('resume-content');
    const resumeTitle = document.querySelector('.resume-title');
    if (resumeContent) {
        resumeContent.classList.add('active');
        resumeTitle.classList.add('open');
        resumeTitle.querySelector('.arrow').style.transform = 'rotate(180deg)';
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

    // Ensure champion section is closed by default and set the correct arrow direction
    const championTitle = document.querySelector('.champion-title');
    if (championTitle) {
        championTitle.querySelector('.arrow').style.transform = 'rotate(0deg)';
    }
});

function toggleResume() {
    const resumeContent = document.getElementById('resume-content');
    const resumeTitle = document.querySelector('.resume-title');

    if (resumeContent) {
        resumeContent.classList.toggle('active');
        resumeTitle.classList.toggle('open');
        const arrow = resumeTitle.querySelector('.arrow');
        if (resumeContent.classList.contains('active')) {
            arrow.style.transform = 'rotate(180deg)';
        } else {
            arrow.style.transform = 'rotate(0deg)';
        }
    }
}

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