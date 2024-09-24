document.addEventListener("DOMContentLoaded", () => {
    const resumeContent = document.getElementById('resume-content');
    const resumeTitle = document.querySelector('.resume-title');
    resumeContent.classList.add('active');
    resumeTitle.classList.add('open');
    resumeTitle.querySelector('.arrow').style.transform = 'rotate(180deg)';
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