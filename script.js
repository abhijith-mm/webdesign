//javascript for scroll to top buttom
const scrollBtn= document.querySelector(".scrollTotop-btn");
window.addEventListener("scroll",function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click",()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})