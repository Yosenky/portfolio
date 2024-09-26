document.addEventListener('DOMContentLoaded', () => {
    const projectTitles = document.querySelectorAll('.project-title');
    const projectDetails = document.querySelectorAll('.project-details');
    
    projectTitles.forEach(title => {
        title.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            projectTitles.forEach(item => item.classList.remove('selected'));
            title.classList.add('selected');

            const contentId = title.getAttribute('data-content');
            projectDetails.forEach(detail => {
                if (detail.id === contentId) {
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none';
                }
            });
        });
    });

    // Ensure Resume is selected on load
    document.querySelector('.project-title.selected').classList.add('selected');
    document.querySelector('.project-details').style.display = 'block';
});