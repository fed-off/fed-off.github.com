var a=document.querySelectorAll(".certificates__image");if(a.length>0){let e=document.createElement("div");e.className="certificates-modal",e.innerHTML=`
    <div class="certificates-modal__content">
      <button class="certificates-modal__close" type="button" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C"></button>
      <img class="certificates-modal__image" src="" alt="">
    </div>
  `,document.body.appendChild(e);let s=e.querySelector(".certificates-modal__image"),o=e.querySelector(".certificates-modal__close"),i=t=>{s.src=t,e.classList.add("certificates-modal--active"),document.body.style.overflow="hidden"},c=()=>{e.classList.remove("certificates-modal--active"),document.body.style.overflow=""};a.forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{i(t.src)})}),o.addEventListener("click",c),e.addEventListener("click",t=>{t.target===e&&c()}),document.addEventListener("keydown",t=>{e.classList.contains("certificates-modal--active")&&t.key==="Escape"&&c()})}
