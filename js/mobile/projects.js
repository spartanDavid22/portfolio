document.querySelectorAll(".projects__buttons button").forEach(button=>{
    button.addEventListener("click", event =>{
        document.querySelector(".active").classList.remove("active")
        event.target.classList.add("active")
    })
})