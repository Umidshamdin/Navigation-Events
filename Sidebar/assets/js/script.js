let closeSide= document.getElementById("close-btn")
let openSide= document.getElementById("open-btn")

let sideBar= document.querySelector(".sidebar")

closeSide.addEventListener("click",function(){
    sideBar.classList.add("close")
})

openSide.addEventListener("click",function(){
    sideBar.classList.remove("close")
})


