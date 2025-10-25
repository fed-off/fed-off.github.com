var u=document.querySelector(".header__button"),_=document.querySelector(".header__nav"),O=()=>{_.classList.add("header__nav--active"),u.classList.add("header__button--active"),document.addEventListener("click",x)},I=()=>{_.classList.remove("header__nav--active"),u.classList.remove("header__button--active"),document.removeEventListener("click",x)};function x(e){!_.contains(e.target)&&!u.contains(e.target)&&I()}var z=()=>{_.classList.contains("header__nav--active")?I():O()};u.addEventListener("click",z);var G=document.querySelector(".services__list"),J=e=>{let t=e.target;if(t.closest(".services__title-wrapper")){let a=t.closest(".services__item"),s=a.querySelector(".services__button"),r=a.querySelector(".services__description");s.classList.toggle("services__button--active"),r.classList.toggle("services__description--active")}};G.addEventListener("click",J);var b=document.querySelector(".scroll-up");function K(){window.scrollY>window.innerHeight*1.5?b.classList.add("scroll-up--show"):b.classList.remove("scroll-up--show")}function Q(){window.scrollTo({top:0})}window.addEventListener("scroll",K);b.addEventListener("click",Q);var U=document.querySelector(".hero__list"),W=document.querySelector(".projects__list"),h=document.querySelector(".services"),X=e=>{let t=e.querySelector(".services__description");if(!t.classList.contains("services__description--active")){let s=e.querySelector(".services__button");setTimeout(()=>{t.classList.add("services__description--active"),s.classList.add("services__button--active")},700)}},$=e=>{let t=e.target.closest("[data-link]");if(t){let a=t.dataset.link;if(h.querySelectorAll(`[data-name="${a}"]`).length){let w=h.querySelector(`[data-name="${a}"]`),R=w.getBoundingClientRect().top,Y=window.scrollY+R-20;window.scrollTo({top:Y}),X(w)}else h.scrollIntoView()}};U.addEventListener("click",$);W.addEventListener("click",$);var Z=document.querySelectorAll('a[href^="#"]'),ee=e=>{e.preventDefault();let a=e.target.closest("a").getAttribute("href");if(a&&a!=="#"){let s=a.substring(1),r=document.getElementById(s);r&&r.scrollIntoView()}else window.scrollTo({top:0})};Z.forEach(e=>{e.addEventListener("click",ee)});var m=Array.from(document.querySelectorAll(".projects__img")),l=0,te=`
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
        <span class="gallery-modal__current">1</span> / <span class="gallery-modal__total">${m.length}</span>
      </div>
    </div>
  </div>
`;document.body.insertAdjacentHTML("beforeend",te);var d=document.querySelector(".gallery-modal"),T=document.querySelector(".gallery-modal__image"),ae=document.querySelector(".gallery-modal__close"),se=document.querySelector(".gallery-modal__nav--prev"),le=document.querySelector(".gallery-modal__nav--next"),ce=document.querySelector(".gallery-modal__current"),L=()=>{let e=m[l];T.src=e.src,T.alt=e.alt,ce.textContent=l+1},ne=e=>{l=e,L(),d.classList.add("gallery-modal--active"),document.body.style.overflow="hidden"},E=()=>{d.classList.remove("gallery-modal--active"),document.body.style.overflow=""},F=()=>{l=l>0?l-1:m.length-1,L()},B=()=>{l=l<m.length-1?l+1:0,L()};document.querySelector(".projects__list")?.addEventListener("click",e=>{let t=e.target.closest(".projects__link");if(t){e.preventDefault();let a=t.querySelector(".projects__img"),s=m.indexOf(a);s!==-1&&ne(s)}});ae.addEventListener("click",E);se.addEventListener("click",F);le.addEventListener("click",B);d.addEventListener("click",e=>{e.target===d&&E()});document.addEventListener("keydown",e=>{if(d.classList.contains("gallery-modal--active"))switch(e.key){case"Escape":E();break;case"ArrowLeft":F();break;case"ArrowRight":B();break}});var k=document.getElementById("contactForm"),n=document.getElementById("contactFile"),g=document.getElementById("fileName"),M=document.getElementById("formSuccess"),S=document.getElementById("catalogContactForm"),o=document.getElementById("catalogContactFile"),v=document.getElementById("catalogFileName"),N=document.getElementById("catalogFormSuccess");n&&n.addEventListener("change",()=>{n.files.length>0?n.files.length===1?g.textContent=n.files[0].name:g.textContent=`\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0444\u0430\u0439\u043B\u043E\u0432: ${n.files.length}`:g.textContent="\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D"});k&&k.addEventListener("submit",e=>{e.preventDefault(),setTimeout(()=>{M.classList.add("contact-form__success--visible"),k.reset(),g.textContent="\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",setTimeout(()=>{M.classList.remove("contact-form__success--visible")},5e3)},500)});var H=document.getElementById("contactPhone");H&&H.addEventListener("input",e=>{let t=e.target.value.replace(/\D/g,"");if(t.length>0){t[0]==="8"&&(t=`7${t.slice(1)}`);let a="+7";t.length>1&&(a=`${a} (${t.substring(1,4)}`),t.length>=5&&(a=`${a}) ${t.substring(4,7)}`),t.length>=8&&(a=`${a}-${t.substring(7,9)}`),t.length>=10&&(a=`${a}-${t.substring(9,11)}`),e.target.value=a}});o&&o.addEventListener("change",()=>{o.files.length>0?o.files.length===1?v.textContent=o.files[0].name:v.textContent=`\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0444\u0430\u0439\u043B\u043E\u0432: ${o.files.length}`:v.textContent="\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D"});S&&S.addEventListener("submit",e=>{e.preventDefault(),setTimeout(()=>{N.classList.add("contact-form__success--visible"),S.reset(),v.textContent="\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",setTimeout(()=>{N.classList.remove("contact-form__success--visible")},5e3)},500)});var D=document.getElementById("catalogContactPhone");D&&D.addEventListener("input",e=>{let t=e.target.value.replace(/\D/g,"");if(t.length>0){t[0]==="8"&&(t=`7${t.slice(1)}`);let a="+7";t.length>1&&(a=`${a} (${t.substring(1,4)}`),t.length>=5&&(a=`${a}) ${t.substring(4,7)}`),t.length>=8&&(a=`${a}-${t.substring(7,9)}`),t.length>=10&&(a=`${a}-${t.substring(9,11)}`),e.target.value=a}});var c=[],oe=`
  <div class="cart-modal">
    <div class="cart-modal__content">
      <button class="cart-modal__close" type="button" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C">
        <span class="visually-hidden">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</span>
      </button>
      <h2 class="cart-modal__title">\u041A\u043E\u0440\u0437\u0438\u043D\u0430</h2>
      <ul class="cart-modal__list"></ul>
      <div class="cart-modal__empty" style="display: none;">
        \u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0438\u0437 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430.
      </div>
      <form class="cart-modal__form">
        <div class="cart-modal__field">
          <label class="cart-modal__label" for="cartName">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F *</label>
          <input class="cart-modal__input" type="text" id="cartName" required>
        </div>
        <div class="cart-modal__field">
          <label class="cart-modal__label" for="cartPhone">\u0422\u0435\u043B\u0435\u0444\u043E\u043D *</label>
          <input class="cart-modal__input" type="tel" id="cartPhone" required>
        </div>
        <div class="cart-modal__field">
          <label class="cart-modal__label" for="cartMessage">\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443</label>
          <textarea class="cart-modal__textarea" id="cartMessage"></textarea>
        </div>
        <div class="cart-modal__field">
          <label class="cart-modal__label" for="cartFile">\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B</label>
          <div class="cart-modal__file-wrapper">
            <input class="cart-modal__file-input" type="file" id="cartFile" multiple>
            <label class="cart-modal__file-label" for="cartFile">\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B</label>
            <span id="cartFileName">\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D</span>
          </div>
        </div>
        <button class="cart-modal__submit" type="submit">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</button>
      </form>
    </div>
  </div>
`;document.body.insertAdjacentHTML("beforeend",oe);var f=document.querySelector(".cart-modal"),q=document.querySelector(".cart-modal__list"),j=document.querySelector(".cart-modal__empty"),p=document.querySelector(".cart-modal__form"),ie=document.querySelector(".cart-modal__close"),A=document.querySelector(".header__cart-button"),re=document.querySelector(".header__cart-count"),y=()=>{q.innerHTML="",c.length===0?(j.style.display="block",p.style.display="none"):(j.style.display="none",p.style.display="block",c.forEach((e,t)=>{let a=document.createElement("li");a.className="cart-modal__item",a.innerHTML=`
        <span class="cart-modal__item-name">${e}</span>
        <button class="cart-modal__item-remove" type="button" data-index="${t}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
      `,q.appendChild(a)})),re.textContent=c.length},V=e=>{c.includes(e)||(c.push(e),y())};q.addEventListener("click",e=>{if(e.target.classList.contains("cart-modal__item-remove")){let t=parseInt(e.target.dataset.index,10);c.splice(t,1),y()}});var de=()=>{f.classList.add("cart-modal--active"),document.body.style.overflow="hidden"},C=()=>{f.classList.remove("cart-modal--active"),document.body.style.overflow=""};A&&A.addEventListener("click",de);ie.addEventListener("click",C);f.addEventListener("click",e=>{e.target===f&&C()});document.addEventListener("click",e=>{if(e.target.classList.contains("catalog__button--cart")||e.target.classList.contains("catalog__modal-button")){let t=e.target.dataset.name||e.target.closest(".catalog__card")?.querySelector(".catalog__card-title")?.textContent;t&&V(t)}});document.addEventListener("addToCart",e=>{e.detail&&e.detail.name&&V(e.detail.name)});p.addEventListener("submit",e=>{e.preventDefault(),alert(`\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u0430:
${c.join(`
`)}

\u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.`),c.length=0,y(),p.reset(),document.getElementById("cartFileName").textContent="\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",C()});var i=document.getElementById("cartFile"),P=document.getElementById("cartFileName");i&&i.addEventListener("change",()=>{i.files.length>0?P.textContent=i.files.length===1?i.files[0].name:`\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0444\u0430\u0439\u043B\u043E\u0432: ${i.files.length}`:P.textContent="\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D"});y();
