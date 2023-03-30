// HAMBURGER JS 
AOS.init({once: true});


var menu = document.querySelector(".menu").children[0]
var spantwo = document.querySelector(".line-2")
var spanone = document.querySelector(".line-1")
var spanthree = document.querySelector(".line-3")

menu.onclick = () => {
  spantwo.classList.toggle("li2ne")
  spanone.classList.toggle("l1ine")
  spanthree.classList.toggle("lin3e")


}

// SIDEBAR 

const sidebar = document.getElementById("sidebar")
const body = document.querySelector("body")


function sidebarOpen() {
    sidebar.classList.toggle("opacity")
    body.classList.toggle("active")

}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
const takeToTop = document.getElementById('takeToTop')
  window.addEventListener('scroll',(e)=>{
    if(window.scrollY > (window.innerHeight /2)){
        takeToTop.classList.remove('opacity-0')
        takeToTop.classList.remove('pointer-events-none')
    }else{
        takeToTop.classList.add('opacity-0')
        takeToTop.classList.add('pointer-events-none')
    }
  })

  