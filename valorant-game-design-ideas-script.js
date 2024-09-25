function toggleAgentDetails(agentId) {
    // Get all agent detail elements
    const agentDetails = document.querySelectorAll('.agent-details');

    // Hide all agent details
    agentDetails.forEach(detail => {
        detail.style.display = 'none';
    });

    // Show the selected agent detail
    var selectedAgent = document.getElementById(agentId);
    if(selectedAgent) {
        selectedAgent.style.display = 'block';
    }

    // Remove 'selected' class from all agent titles
    const agentTitles = document.querySelectorAll('.agent-title');
    agentTitles.forEach(title => {
        title.classList.remove('selected');
    });

    // Add 'selected' class to the clicked agent title
    const clickedTitle = document.querySelector(`[onclick="toggleAgentDetails('${agentId}')"]`);
    if(clickedTitle) {
        clickedTitle.classList.add('selected');
    }
}