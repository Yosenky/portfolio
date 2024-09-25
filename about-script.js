document.addEventListener('DOMContentLoaded', () => {
    const projectTitles = document.querySelectorAll('.project-title');
    
    projectTitles.forEach(title => {
        title.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            projectTitles.forEach(item => item.classList.remove('selected'));
            title.classList.add('selected');
        });
    });
    
    // Ensure Resume is selected on load
    document.querySelector('.project-title.selected').classList.add('selected');
});