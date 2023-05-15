// 사람 아이콘 누르면 로그인/회원가입/ 주문배송조회 나오도록 하기 
const user = document.querySelector('.user')
const user_link = document.querySelector('.user_link')
console.log(user, user_link)

user_link.style.display = 'none'

user.addEventListener('mouseover',()=>{
    user_link.style.display = 'flex'
})
user.addEventListener('mouseout',()=>{
    user_link.style.display = 'none'
})





// 제품 서서히 사라지는 거 반복해서 보여주기 
const product = document.querySelectorAll('.product')

product.forEach((t,i)=>{
    t.style.opacity = '0'
    product[0].style.opacity = '1'
    let num = 0;
    let time = setInterval(function(){
        ++num
        if(num > 2){num = 0;}
        // console.log(num)
        t.style.opacity = '0'
        product[num].style.opacity = '1'
    },2000)
})