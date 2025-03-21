// Function to generate the navigation menu dynamically
function loadNavbar() {
    const navbar = document.getElementById("navbar");
    projects.forEach(project => {
        let navItem = document.createElement("button"); // Use a button instead of <a>
        navItem.textContent = project.title;
        navItem.classList.add("nav-item");
        navItem.onclick = () => displayProject(project); // Keep the onclick event
        navbar.appendChild(navItem);
    });
}

function displayProject(project) {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="card">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div id="project-frame"></div>
        </div>
    `;

    // Dynamically load project content into an iframe
    const iframe = document.createElement("iframe");
    iframe.src = project.link; 
    iframe.width = "100%";
    iframe.height = "400px"; // Increased height for better view
    iframe.style.border = "none";
    iframe.style.borderRadius = "10px";

    document.getElementById("project-frame").appendChild(iframe);
}

// Load the navbar and default content on page load
document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();
    displayProject(projects[0]); // Display first project by default
});
