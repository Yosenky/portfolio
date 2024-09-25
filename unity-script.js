document.addEventListener('DOMContentLoaded', () => {
    const projectTitles = document.querySelectorAll('.project-title');
    
    projectTitles.forEach(title => {
        title.addEventListener('click', () => {
            projectTitles.forEach(item => item.classList.remove('selected'));
            title.classList.add('selected');
        });
    });
    
    // Initially select Project A
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
