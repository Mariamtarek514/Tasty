let sections=document.querySelectorAll(".section");
let links=document.querySelectorAll(".nav-links li");
function reachToSection(){
  let current="";
  sections.forEach((section)=>{
    const offset = section.offsetTop;
    const height = section.clientHeight;
    if (scrollY >= offset - height / 3 ) {
    current=section.getAttribute("id");
    }
});
links.forEach((li)=>{
  // remove active class for all links
  li.classList.remove("active");
  if(li.dataset.reach == current){
      li.classList.add("active");
  }
})
}
window.addEventListener("scroll",reachToSection);
window.addEventListener("reload",reachToSection);
// toggle nav
let openNavbar=document.getElementById("openNav");
openNavbar.addEventListener("click",(e)=>{
    document.querySelector("nav .nav-links").classList.toggle("active");
    // change icon
  if(e.target.classList.contains("fa-bars")){
    e.target.classList.remove("fa-bars");
    e.target.classList.add("fa-xmark");
  }else{
    e.target.classList.add("fa-bars");
    e.target.classList.remove("fa-xmark");
  }

})
// scrol up
let scrollToTop=()=>{
  document.documentElement.scrollTo({
    top:0,
    left:0,
    behavior: 'smooth'
});
}
window.addEventListener("scroll",()=>{
  let scrollArrow=document.getElementById("scrollup");
  if(document.documentElement.scrollTop > 150 ||
    document.body.scrollTop > 150){
      scrollArrow.style.bottom="3rem";
    }else{
      scrollArrow.style.bottom="-20%";
    }
})

