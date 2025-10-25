var t=Array.from(document.querySelectorAll(".projects__img")),l=0,y=`
  <div class="gallery-modal">
    <div class="gallery-modal__content">
      <button class="gallery-modal__close" type="button" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C">
        <span class="visually-hidden">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</span>
      </button>
      <button class="gallery-modal__nav gallery-modal__nav--prev" type="button" aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435">
        <span class="visually-hidden">\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435</span>
      </button>
      <img class="gallery-modal__image" src="" alt="">
      <button class="gallery-modal__nav gallery-modal__nav--next" type="button" aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435">
        <span class="visually-hidden">\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435</span>
      </button>
      <div class="gallery-modal__counter">
        <span class="gallery-modal__current">1</span> / <span class="gallery-modal__total">${t.length}</span>
      </div>
    </div>
  </div>
`;document.body.insertAdjacentHTML("beforeend",y);var a=document.querySelector(".gallery-modal"),r=document.querySelector(".gallery-modal__image"),u=document.querySelector(".gallery-modal__close"),g=document.querySelector(".gallery-modal__nav--prev"),_=document.querySelector(".gallery-modal__nav--next"),v=document.querySelector(".gallery-modal__current"),o=()=>{let e=t[l];r.src=e.src,r.alt=e.alt,v.textContent=l+1},p=e=>{l=e,o(),a.classList.add("gallery-modal--active"),document.body.style.overflow="hidden"},n=()=>{a.classList.remove("gallery-modal--active"),document.body.style.overflow=""},d=()=>{l=l>0?l-1:t.length-1,o()},m=()=>{l=l<t.length-1?l+1:0,o()};document.querySelector(".projects__list")?.addEventListener("click",e=>{let s=e.target.closest(".projects__link");if(s){e.preventDefault();let i=s.querySelector(".projects__img"),c=t.indexOf(i);c!==-1&&p(c)}});u.addEventListener("click",n);g.addEventListener("click",d);_.addEventListener("click",m);a.addEventListener("click",e=>{e.target===a&&n()});document.addEventListener("keydown",e=>{if(a.classList.contains("gallery-modal--active"))switch(e.key){case"Escape":n();break;case"ArrowLeft":d();break;case"ArrowRight":m();break}});
