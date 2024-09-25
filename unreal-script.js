function toggleProjectDetails(projectId) {
    // Get all project detail elements
    const projectDetails = document.querySelectorAll('.project-details');

    // Hide all project details
    projectDetails.forEach(detail => {
        detail.style.display = 'none';
    });

    // Show the selected project detail
    var selectedProject = document.getElementById(projectId);
    if(selectedProject) {
        selectedProject.style.display = 'block';
    }

    // Remove 'selected' class from all project titles
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(title => {
        title.classList.remove('selected');
    });

    // Add 'selected' class to the clicked project title
    const clickedTitle = document.querySelector(`[onclick="toggleProjectDetails('${projectId}')"]`);
    if(clickedTitle) {
        clickedTitle.classList.add('selected');
    }
}
