let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLink = document.querySelectorAll(".nav__link")


menu.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    navbar.classList.remove('active')
}



navbar.addEventListener("click",function(e){
    if (e.target.className == "nav__link"){

        navLink.forEach(function(po){
            if (po.classList.contains("active")){
                po.classList.remove("active")
            }
        })


        e.target.classList.add("active")
    }
})