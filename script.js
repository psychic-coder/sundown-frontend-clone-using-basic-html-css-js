

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function page3Animation(){
    var elemC=document.querySelector("#elem-container")
var fixed= document.querySelector("#fixed-image");
//as soon as the mouse will enter the elemC region
elemC.addEventListener("mouseenter",function(){
   fixed.style.display="block";
})
//as soon as the mouse will leave the elemC region
elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none";
 })
 var elems=document.querySelectorAll(".elem");
 elems.forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
        var img=   ele.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${img})`
 })
 
})
}
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        
      }) ;
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
function loader(){
    var loader =document.querySelector("#loader");
    setTimeout(function(){
   loader.style.top="-100%";
},4200);
}


menuAnimation();
swiperAnimation();
page3Animation();
loader();