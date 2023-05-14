// sns -> Slides per view
const big_sns = document.querySelector('#project_view')
const swiper_sns = document.querySelectorAll('#sns .all_contents .swiper-slide')
let imgC = document.createElement('img')
big_sns.style.display = 'none'

//--------------------------------------------------------------------



//------------------------------------------------------------------
swiper_sns.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log('----------')
        console.log(i)
        imgC.src = `./images/sns_design_${i+1}.jpg`
        big_sns.style.display = 'block'
        big_sns.children[0].appendChild(imgC)
        /* big_sns.innerHTML = i+1
        big_sns.style.display = 'block' */
    })
})

big_sns.addEventListener('click',()=>{
    big_sns.style.display = 'none'
})


const swiper = new Swiper('#sns .all_contents', {
    direction: 'horizontal',
    loop:true,
    slidesPerView:3, // 한번에 보이는 slide 갯수
    spaceBetween:60, // slide 사이간격 
    centeredSlides: true, //1번 이미지가 가운데 오도록 // 중심슬라이드 인식
    mousewheel:true,
    on: {
        slideChange: function () { // swiper 공식 | 현재 활성 슬라이드가 변경되면 이벤트가 시작
            const activeIndex = this.activeIndex; // 변수 activeIndex 는 여기서 activeIndex는 활성화된 .activeIndex를 의미함.
            // console.log(activeIndex)
            const slides = this.slides; // 변수 slides는 #banner .swiper의 slides
            slides.forEach((slide, index) => {
                if (index === activeIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        },
    },
    // effect: 'coverflow', 
    pagination: { // 밑에 이미지 갯수 표시 
        el: "#sns .swiper-pagination",
        // clickable: true,
    },
    navigation: {//다음이전버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//----------------------------------------------------------------





// ----------------------------------------------------------------------------
// redesign_swiper 
const redesign_swiper = new Swiper('#redesign .swiper',{
    slidesPerView:1,
    // mousewheel:true,
    loop:true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    navigation: {//다음이전버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})




// --------------------------------------- // 
// #footer 에서 화살표 누르면 맨 위로 부드럽게 올라가기

// const f_arrow = document.querySelector('#footer .arrow')
// // console.log(f_arrow)

// f_arrow.addEventListener('click',(e)=>{
//     e.preventDefault(),
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth' // 부드럽게 올라가기
//     });
// })


// --------------------------------------- // 
// #intro 에서 화살표 누르면 맨 위로 부드럽게 내려가기

const i_arrow = document.querySelector('#intro .arrow_down')
const info = document.querySelector('#info')
// console.log(i_arrow)

i_arrow.addEventListener('click',(e)=>{
    e.preventDefault(),
    window.scrollTo({
        top:info.offsetTop,
        behavior:'smooth'
    })
    // behavior: 'smooth'

})


// detail a img 누르면 크게 나오도록
const detail_img = document.querySelectorAll('#detail .contents a')

detail_img.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        imgC.src = `./images/detail${i+1}.jpg`
        big_sns.style.display = 'block'
        big_sns.children[0].appendChild(imgC)
        console.log(this)
        // big_sns-webkit-scrollbar-width:10px;
    })
})

// 압정 누르면 #pin_link 나오게

const pin = document.querySelector('#pin')
// const pin_img = document.querySelector('#pin img')
const pin_link = document.querySelector('#pin_link')
// const link = document.querySelectorAll('#pin_link a')
console.log(pin, pin_link)

pin_link.style.display ='none'

pin.addEventListener('mouseover',()=>{
    pin_link.style.display = 'flex'
})
pin.addEventListener('mouseout',()=>{
    pin_link.style.display = 'none'
})

