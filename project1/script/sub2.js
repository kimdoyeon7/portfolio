// const pro2 = document.querySelector('main .pro2')
const pro2_name = document.querySelector('main .pro2 .pro_name')
const pro2_detail = document.querySelector('main .pro2 .pro_detail')
const pro3_name = document.querySelector('main .pro3 .pro_name')
const pro3_detail = document.querySelector('main .pro3 .pro_detail')
// const 
// console.log(pro2)
window.onload = function() {
    setTimeout (function () {
    scrollTo(0,0);
    },100);
}

//두번째 제품
gsap.fromTo(pro2_name,{
    y:150, opacity:0
},{
    scrollTrigger:pro2_name.parentNode,
    duration:1.2, delay:0.5,
    y:0, opacity:1
})
gsap.fromTo(pro2_detail,{
    y:150, opacity:0
},{
    scrollTrigger:pro2_detail.parentNode,
    duration:1.2, delay:0.8,
    y:0, opacity:1
})

// 세번째 제품
gsap.fromTo(pro3_name,{
    y:150, opacity:0
},{
    scrollTrigger:pro3_name.parentNode,
    duration:1.2, delay:0.9,
    y:0, opacity:1
})

gsap.fromTo(pro3_detail,{
    y:150, opacity:0
},{
    scrollTrigger:pro3_detail.parentNode,
    duration:1.2, delay:1.1,
    y:0, opacity:1
})