let iconToggle = document.getElementById("iconToggle");
iconToggle.addEventListener("click",(event)=>{
    
    let navLinks = document.getElementById("navLinks")
    
    if(navLinks.style.display == "none"){
        navLinks.style.display = "block";
        iconToggle.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>"
    }
    else{
        navLinks.style.display = "none";
        iconToggle.innerHTML = "<i class=\"fa-solid fa-bars\"></i>"
    }

})

document.querySelectorAll("#about, #contact, #projects, #skills").forEach(tag =>{
    tag.addEventListener("click", event =>{

        document.getElementById("navLinks").style.display = "none";
    })
})
