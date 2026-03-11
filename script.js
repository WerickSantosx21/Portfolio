const btn = document.getElementById("btn-top")

window.addEventListener("scroll", () => {

if (window.scrollY > 300){
btn.style.display = "block"
}else{
btn.style.display = "none"
}

})

btn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
})

})