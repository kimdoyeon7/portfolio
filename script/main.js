// banner -> Slides per view
// const all_contents = document.querySelector('#banner .all_contents')

const sns_swiper = new Swiper("#sns .swiper", {
    slidesPerView:3, // 한번에 보이는 slide 갯수
    spaceBetween:60, // slide 사이간격 
    mousewheel:true,
    loop:true,
    centeredSlides: true, //1번 이미지가 가운데 오도록
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
// swiper-slide > img 누르면 배너디자인 크게 뜨게
/* const view = document.querySelector('#project_view')
// const banner_img = document.querySelectorAll('#banner > .banner_img > a ')
const banner_img = document.querySelectorAll('#banner .contents > .banner_img')
let imgC = document.createElement('img')
console.log(view, banner_img, imgC)

view.style.display = 'none'

banner_img.forEach((t,i)=>{
    console.log('----------------')
    console.log(t,i)
    t.addEventListener('click',(e)=>{
        e.preventDefault() //a의 href 기능 막기
        // console.log(t,i)
        // imgC.src = `./images/banner_${i+1}.jpg`
        // console.log(imgC)
        // view.style.display = 'block'
        // view.children[0].appendChild(imgC)
    })
}) */
// detail design
// const click_btn = document.querySelector('#detail .contents span')
// console.log('click_btn')

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

