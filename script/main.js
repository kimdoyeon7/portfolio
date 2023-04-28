// banner -> Slides per view
const banner_swiper = new Swiper("#banner .swiper", {
    slidesPerView:3, // 한번에 보이는 slide 갯수
    spaceBetween:30, // slide 사이간격 
    mousewheel:true,
    loop:true,
    centeredSlides: true, //1번 이미지가 가운데 오도록
    pagination: { // 밑에 이미지 갯수 표시 
        el: "#banner .swiper-pagination",
        clickable: true,
    },
    navigation: {//다음이전버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});