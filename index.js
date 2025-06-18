const loader = document.getElementById("preloader")

window.addEventListener("load" , ()=>{
    loader.style.display = "none"
})


const menu = document.querySelector(".menu")
const bar = document.querySelector(".bar")
const cross = document.querySelector("#cross")

menu.addEventListener("click" , ()=> {
    bar.style.right = "0"
    bar.style.transition = "0.4s ease"
} )
cross.addEventListener( "click" , () => {
    bar.style.right = "-200px"
} )


const more = document.querySelector(".more")
const less = document.querySelector(".less")
const row2= document.querySelector("#row2")
const row3= document.querySelector("#row3")

more.addEventListener("click" , () => {
    row2.style.display = "flex";
    row3.style.display = "flex";
    more.style.display = "none"
    less.style.display = "block"
})
less.addEventListener("click" , () => {
    row2.style.display = "none";
    row3.style.display = "none";
    more.style.display = "block"
    less.style.display = "none"
})

const insta1 = document.querySelector("#insta1")
const insta2 = document.querySelector("#insta2")
const url = "https://www.instagram.com/artist_ankitkumar_/"

insta1.addEventListener("click" , () => {
    window.open(url, '_blank').focus();
})
insta2.addEventListener("click" , () => {
    window.open(url, '_blank').focus();
})

