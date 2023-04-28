// banner -> Slides per view
const all_contents = document.querySelector('#banner .all_contents')
const banner_swiper = new Swiper("#banner .swiper", {
    slidesPerView:3, // 한번에 보이는 slide 갯수
    spaceBetween:60, // slide 사이간격 
    mousewheel:true,
    loop:true,
    centeredSlides: true, //1번 이미지가 가운데 오도록
    on: {
        slideChange: function () { // swiper 공식 | 현재 활성 슬라이드가 변경되면 이벤트가 시작
            const activeIndex = this.activeIndex; // 변수 activeIndex 는 이 함수의 변수..
            // console.log(activeIndex)
            const slides = this.slides;
            slides.forEach((slide, index) => {
                if (index === activeIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        },
    },
    pagination: { // 밑에 이미지 갯수 표시 
        el: "#banner .swiper-pagination",
        clickable: true,
    },
    navigation: {//다음이전버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});