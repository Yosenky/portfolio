function toggleResume() {
    const resumeContent = document.getElementById('resume-content');
    const resumeTitle = document.querySelector('.resume-title');
    
    if (resumeContent) {
        resumeContent.classList.toggle('active');
        resumeTitle.classList.toggle('open');
    }
}