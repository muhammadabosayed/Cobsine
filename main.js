const up = document.querySelector(".up")
const btn = document.querySelector(".btn")
const close = document.querySelector(".close")
const menu = document.querySelector(".menu")

btn.onclick = function(){
  menu.style.transform="translateY(0)"
  menu.style.transition=".6s"
}
close.onclick = function(){
  menu.style.transform="translateY(-100vh)"
  menu.style.transition=".6s"
}













window.onscroll= function()
{
  if(window.scrollY >= 700){
    up.style.right="30px"
    up.style.transition="1s"
  }else{
    up.style.right="-50px"
    up.style.transition="1s"
  }
}

up.onclick= function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

