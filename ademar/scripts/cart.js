var e=[],p=`
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
`;document.body.insertAdjacentHTML("beforeend",p);var c=document.querySelector(".cart-modal"),d=document.querySelector(".cart-modal__list"),i=document.querySelector(".cart-modal__empty"),s=document.querySelector(".cart-modal__form"),b=document.querySelector(".cart-modal__close"),m=document.querySelector(".header__cart-button"),f=document.querySelector(".header__cart-count"),o=()=>{d.innerHTML="",e.length===0?(i.style.display="block",s.style.display="none"):(i.style.display="none",s.style.display="block",e.forEach((t,a)=>{let n=document.createElement("li");n.className="cart-modal__item",n.innerHTML=`
        <span class="cart-modal__item-name">${t}</span>
        <button class="cart-modal__item-remove" type="button" data-index="${a}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
      `,d.appendChild(n)})),f.textContent=e.length},u=t=>{e.includes(t)||(e.push(t),o())};d.addEventListener("click",t=>{if(t.target.classList.contains("cart-modal__item-remove")){let a=parseInt(t.target.dataset.index,10);e.splice(a,1),o()}});var y=()=>{c.classList.add("cart-modal--active"),document.body.style.overflow="hidden"},r=()=>{c.classList.remove("cart-modal--active"),document.body.style.overflow=""};m&&m.addEventListener("click",y);b.addEventListener("click",r);c.addEventListener("click",t=>{t.target===c&&r()});document.addEventListener("click",t=>{if(t.target.classList.contains("catalog__button--cart")||t.target.classList.contains("catalog__modal-button")){let a=t.target.dataset.name||t.target.closest(".catalog__card")?.querySelector(".catalog__card-title")?.textContent;a&&u(a)}});document.addEventListener("addToCart",t=>{t.detail&&t.detail.name&&u(t.detail.name)});s.addEventListener("submit",t=>{t.preventDefault(),alert(`\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u0430:
${e.join(`
`)}

\u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.`),e.length=0,o(),s.reset(),document.getElementById("cartFileName").textContent="\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",r()});var l=document.getElementById("cartFile"),_=document.getElementById("cartFileName");l&&l.addEventListener("change",()=>{l.files.length>0?_.textContent=l.files.length===1?l.files[0].name:`\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0444\u0430\u0439\u043B\u043E\u0432: ${l.files.length}`:_.textContent="\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D"});o();
