let iconToggle = document.getElementById("iconToggle");
iconToggle.addEventListener("click",(event)=>{
    
    let navLinks = document.getElementById("navLinks")
    
    if(navLinks.style.display == "none"){
        navLinks.style.display = "block";
    }
    else{
        navLinks.style.display = "none";
    }
    
})