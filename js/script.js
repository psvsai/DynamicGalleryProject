// Function to generate the navigation menu dynamically
function loadNavbar() {
    const navbar = document.getElementById("navbar");

    projects.forEach(project => {
        let navItem = document.createElement("button"); 
        navItem.classList.add("nav-item");

        // Get icon class
        let iconClass = getProjectIcon(project.category); 
        
        // Ensure valid icon class is assigned
        if (iconClass) {
            navItem.innerHTML = `<i class="fa-solid ${iconClass}"></i> ${project.title}`;
        } else {
            navItem.innerHTML = `<i class="fa-solid fa-folder"></i> ${project.title}`; // Default icon
        }

        navItem.onclick = () => displayProject(project); 
        navbar.appendChild(navItem);
    });
}


// Function to assign icons based on project category
function getProjectIcon(category) {
    const iconMap = {
        "Home": "fa-house", 
        "Index HTML": "fa-file-code", 
        "CSS Demo": "fa-paint-brush", 
        "Console": "fa-terminal",
        "Welcome to js": "fa-js", 
        "Grade Condition": "fa-list-check", 
        "Calculator": "fa-calculator", 
        "Car Age Calculator": "fa-car", 
        "Star Pattern Genertor": "fa-star", 
        "TaskPipeline Manager": "fa-tasks", 
        "User Information": "fa-user", 
        "Student Information": "fa-graduation-cap", 
        "Random Number Generator": "fa-random", 
        "BootStrap Form": "fa-window-restore", 
        "CreativeSites": "fa-palette",
        "E-commerce": "fa-shopping-cart",
    };
    return iconMap[category] || "fa-folder"; // Default icon if category not found
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

// Load Font Awesome dynamically
document.addEventListener("DOMContentLoaded", () => {
    console.log("Font Awesome Loaded:", document.querySelector("link[href*='font-awesome']"));

    loadNavbar();

    // Check if icons are added
    console.log("Navbar Items:", document.querySelectorAll(".nav-item i"));



    loadNavbar();
    displayProject(projects[0]); // Display first project by default
});
