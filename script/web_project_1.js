// 이달의 쇼핑 찬스 탭 누르면 상품 바뀌는 것
//공지사항 제목 클릭 시 공지사항 내용만 보이기
// $('.tab_wrap .title a:first-child').on('click',()=>{
    //     $('.notice').show()
    //     $('.gallery').hide()
    //     // classList.remove 제이쿼리버전
    //     $('.tab_wrap .title a').removeClass() 
    //     // classList.add() 제이쿼리버전
    //     $('.tab_wrap .title a:first-child').addClass('active')
    // })
    
    // // //갤러리 제목 클릭 시 갤러리 내용만 보이기 
    // // $('.title a:last-child').on('click',()=>{
        // //     $('.notice').hide()
        // //     $('.gallery').show()
        // //     $('.tab_wrap .title a').removeClass() 
        // //     $('.tab_wrap .title a:last-child').addClass('active')
        // // })


// header nav 배경 메뉴와 배경 한꺼번에 나오는것 
const main_nav = document.querySelectorAll('header .main_nav > ul > li > a') // 메뉴 4개
const main_navSub = document.querySelectorAll('header .main_nav .sub') // 서브메뉴
const main_navBg = document.querySelector('header .containerBg') // 메인 서브배경
console.log(main_nav, main_navSub, main_navBg)
main_navBg.style.display = 'none'
for (let i of main_navSub){
    i.style.display = 'none'
}

//반복문
main_nav.forEach(function(t,i){
    t.addEventListener('mouseover',()=>{
        for (let i of main_navSub){
            i.style.display = 'block'
            // i.style.transition = 'all 0.3s'
        }
        main_navBg.style.display = 'block'
        
    })
    t.addEventListener('mouseout',()=>{
        for (let i of main_navSub){
            i.style.display = 'none'
        }
        main_navBg.style.display = 'none'
        // t.style.transition = 'all 0.3s'
    })
})

// 이달의 쇼핑 찬스 탭 누르면 상품 바뀌는 것
const tab_active = document.querySelector('#shopping .tab .active')
// 빨간선 미리 없애기
// tab_active.classList.remove('active')

const tab = document.querySelectorAll('#shopping .tab h2')
const goods = document.querySelectorAll('#shopping .product .goods')
console.log(tab, goods)

tab.forEach(function(t,i){
    // console.log(this)
    t.addEventListener('click',()=>{
        // console.log(this)
        for(i of tab){i.classList.remove('active');}
        t.classList.add('active');
        for(i of goods){i.style.display}
    })
})
