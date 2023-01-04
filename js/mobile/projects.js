
let projects = [
    {
        name: "Warner Bros Discover+ Dashboard",
        stack: "Frontend",
        innerHTML: '<div class="card"> <img src="assets/warner.png"><div class="container"><h4>Warner Bros Discovery App</h4><p>Sponsored by Warner Bros and FAU</p></div></div>'
    },
    {
        name: "Warner Bros Discover+ Dashboard",
        stack: "Backend",
        innerHTML: '<div class="card"> <img src="assets/warner.png"><div class="container"><h4>Warner Bros Discovery App</h4><p>Sponsored by Warner Bros and FAU</p></div></div>'
    },
    {
        name: "Warner Bros Discover+ Dashboard",
        stack: "Frontend",
        innerHTML: '<div class="card"> <img src="assets/warner.png"><div class="container"><h4>Warner Bros Discovery App</h4><p>Sponsored by Warner Bros and FAU</p></div></div>'
    }
]


document.querySelectorAll(".projects__buttons button").forEach(button=>{
    button.addEventListener("click", event =>{
        document.querySelector(".active").classList.remove("active")
        event.target.classList.add("active")
        
        changeProjects(button);
    })
})

let changeProjects = activeBtn =>{
    let projectsShown = document.querySelector(".projects__shown")

    let activeText = activeBtn.innerHTML;

    if( activeText === "All")
    {
        let allProjects = "";
        projects.forEach(project =>{
            allProjects += project.innerHTML + "\n";
        })
        projectsShown.innerHTML = allProjects;
    }
    else if(activeText === "Frontend" || activeText === "Backend" || activeText === "Full Stack")
    {
        let frontendProjects = "";
        projects.forEach(project =>{
            if(project.stack === activeText)
            {
                frontendProjects += project.innerHTML + "\n";
            }
        })
        projectsShown.innerHTML = frontendProjects;
    }
}